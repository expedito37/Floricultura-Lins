// src/hooks/usePrecos.ts
// Hook que busca os preços numa planilha do Google Sheets (publicada como CSV)
// e devolve um objeto { idDoProduto: "texto do preço" }.
// Se a planilha não carregar, devolve objeto vazio e o site usa o preço do siteConfig.

import { useEffect, useState } from "react";

// Tipo do resultado: chave = id do produto, valor = texto do preço
export type MapaPrecos = Record<string, string>;

// Separa uma linha do CSV em colunas, respeitando textos entre aspas
// (necessário porque o preço pode ter vírgula, ex.: "a partir de R$ 89,90")
function separarLinha(linha: string): string[] {
  const colunas: string[] = [];
  let atual = "";
  let dentroDeAspas = false;

  for (let i = 0; i < linha.length; i++) {
    const caractere = linha[i];

    if (caractere === '"') {
      // Aspas duplas seguidas ("") significam uma aspa de verdade dentro do texto
      if (dentroDeAspas && linha[i + 1] === '"') {
        atual += '"';
        i++;
      } else {
        dentroDeAspas = !dentroDeAspas;
      }
    } else if (caractere === "," && !dentroDeAspas) {
      // Vírgula fora de aspas = fim da coluna
      colunas.push(atual);
      atual = "";
    } else {
      atual += caractere;
    }
  }

  colunas.push(atual);
  return colunas;
}

// Converte o texto CSV inteiro no mapa { id: preco }
// A planilha precisa ter: 1ª coluna = id, 2ª coluna = preço (texto completo)
function csvParaMapa(csv: string): MapaPrecos {
  const mapa: MapaPrecos = {};
  const linhas = csv.split(/\r?\n/);

  // Começa em 1 para pular a linha de cabeçalho (id, preco, nome)
  for (let i = 1; i < linhas.length; i++) {
    if (!linhas[i].trim()) continue; // ignora linhas vazias

    const [id, preco] = separarLinha(linhas[i]);
    if (id && preco) {
      mapa[id.trim()] = preco.trim();
    }
  }

  return mapa;
}

// url = link CSV publicado da planilha (vem do siteConfig)
export function usePrecos(url?: string): MapaPrecos {
  const [precos, setPrecos] = useState<MapaPrecos>({});

  useEffect(() => {
    // Sem link configurado: não faz nada e o site usa os preços do siteConfig
    if (!url) return;

    // Evita atualizar o estado se o componente já foi desmontado
    let ativo = true;

    // Acrescenta um parâmetro que muda a cada carregamento, para o navegador
    // e o Google não devolverem uma versão antiga guardada (cache)
    const separador = url.includes("?") ? "&" : "?";
    const urlSemCache = `${url}${separador}t=${Date.now()}`;

    // "no-store" manda o navegador não usar nenhuma cópia guardada
    fetch(urlSemCache, { cache: "no-store" })
      .then((resposta) => {
        if (!resposta.ok) throw new Error("Falha ao buscar a planilha");
        return resposta.text();
      })
      .then((texto) => {
        if (ativo) setPrecos(csvParaMapa(texto));
      })
      .catch(() => {
        // Erro de rede ou planilha fora do ar: mantém objeto vazio (usa fallback)
      });

    // Função de limpeza do useEffect
    return () => {
      ativo = false;
    };
  }, [url]);

  return precos;
}
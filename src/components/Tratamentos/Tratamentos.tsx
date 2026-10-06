// ============================================================================
// Tratamentos.tsx  (na Floricultura Lins = catálogo de PRODUTOS)
// ----------------------------------------------------------------------------
// Lista de produtos com FILTRO POR CATEGORIA (Todos, Buquês, Arranjos...).
// Guardamos no estado qual categoria está ativa e mostramos só os produtos
// dela. Cada card mostra foto, nome, descrição, prazo de entrega, PREÇO e um
// link que abre o WhatsApp já citando o produto.
// O preço vem da planilha do Google (hook usePrecos) e, se ela falhar ou
// estiver sem o produto, usa o preço de reserva escrito no siteConfig.
// Tudo o mais vem de configuracaoSite.tratamentos.
// ============================================================================
import { useState } from "react";
import {
  configuracaoSite,
  criarLinkTratamento,
  obterPrecoFinal,
  urlPlanilhaPrecos,
} from "../../config/siteConfig";
import { usePrecos } from "../../hooks/usePrecos";
import styles from "./Tratamentos.module.css";

export default function Tratamentos() {
  const { tratamentos } = configuracaoSite;

  // Busca os preços na planilha (objeto { id: "texto do preço" }).
  // Enquanto carrega, ou se der erro, o objeto fica vazio e entra o preço de reserva.
  const precosPlanilha = usePrecos(urlPlanilhaPrecos);

  // Regra do template: a PRIMEIRA categoria da lista (no exemplo, "Todos")
  // mostra todos os produtos, sem filtrar.
  const categoriaTodos = tratamentos.categorias[0];

  // Categoria selecionada agora (começa em "Todos")
  const [categoriaAtiva, setCategoriaAtiva] = useState(categoriaTodos);

  // Lista que será desenhada: tudo, ou só os itens da categoria escolhida
  const itensVisiveis =
    categoriaAtiva === categoriaTodos
      ? tratamentos.itens
      : tratamentos.itens.filter((item) => item.categoria === categoriaAtiva);

  return (
    // id="tratamentos" é o destino do menu e do botão secundário do Hero.
    // O fundo claro vem do CSS Module (alterna com as seções brancas).
    <section id="tratamentos" className={`secao ${styles.tratamentos}`}>
      <div className="container">
        {/* Cabeçalho centralizado da seção */}
        <div className={styles.cabecalho}>
          <span className="rotulo">{tratamentos.etiqueta}</span>
          <h2 className="tituloSecao">{tratamentos.titulo}</h2>
          <p className={styles.subtitulo}>{tratamentos.subtitulo}</p>
        </div>

        {/* Botões de filtro. aria-pressed avisa leitores de tela qual está ativo */}
        <div className={styles.abas} role="group" aria-label="Filtrar produtos por categoria">
          {tratamentos.categorias.map((categoria) => (
            <button
              key={categoria}
              type="button"
              className={`${styles.aba} ${categoria === categoriaAtiva ? styles.abaAtiva : ""}`}
              aria-pressed={categoria === categoriaAtiva}
              onClick={() => setCategoriaAtiva(categoria)}
            >
              {categoria}
            </button>
          ))}
        </div>

        {/* key={categoriaAtiva}: ao trocar de aba o React recria a grade,
            e isso reinicia a animação de entrada dos cards */}
        <div className={styles.grade} key={categoriaAtiva}>
          {itensVisiveis.map((item) => {
            // Calcula o preço deste produto: planilha primeiro, siteConfig como reserva.
            // Pode ser undefined (produto sem preço) e, nesse caso, a linha não aparece.
            const preco = obterPrecoFinal(item, precosPlanilha);

            return (
              <article key={item.id} className={styles.card}>
                {/* Foto do produto, só se existir (o campo imagem é opcional).
                    loading="lazy" faz o navegador baixar a foto só quando ela
                    está perto de aparecer na tela, deixando o site mais leve. */}
                {item.imagem && (
                  <img
                    src={item.imagem}
                    alt={item.nome}
                    className={styles.imagem}
                    loading="lazy"
                  />
                )}

                {/* Emoji decorativo dentro de um círculo */}
                <span className={styles.icone} aria-hidden="true">
                  {item.icone}
                </span>

                <h3 className={styles.nome}>{item.nome}</h3>
                <p className={styles.descricao}>{item.descricao}</p>

                {/* Linha do preço: só é desenhada quando existe um preço */}
                {preco && <p className={styles.preco}>{preco}</p>}

                {/* Rodapé do card: prazo de entrega à esquerda, link do WhatsApp à direita */}
                <div className={styles.rodape}>
                  <span className={styles.duracao}>{item.duracao}</span>
                  <a
                    href={criarLinkTratamento(item.nome)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {tratamentos.textoBotao} <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
// ============================================================================
// Depoimentos.tsx
// ----------------------------------------------------------------------------
// Avaliações de clientes em cards sobre fundo escuro. No computador aparecem
// lado a lado; no celular viram uma faixa que se arrasta para o lado
// (scroll-snap do CSS) — sem JavaScript de carrossel, ao contrário do
// carrossel do Viver Bem. Dados: configuracaoSite.depoimentos.
// ============================================================================
import { configuracaoSite } from "../../config/siteConfig";
import styles from "./Depoimentos.module.css";

// Componente pequeno só para as estrelas. Recebe a nota (1 a 5).
function Estrelas({ nota }: { nota: number }) {
  // Garante que a nota fique entre 0 e 5, mesmo que alguém digite errado no siteConfig
  const cheias = Math.max(0, Math.min(5, Math.round(nota)));

  return (
    // role="img" + aria-label: leitores de tela leem "Nota 5 de 5" em vez de cinco símbolos
    <span className={styles.estrelas} role="img" aria-label={`Nota ${cheias} de 5`}>
      {"★".repeat(cheias)}
      {"☆".repeat(5 - cheias)}
    </span>
  );
}

export default function Depoimentos() {
  const { depoimentos } = configuracaoSite;

  return (
    // id="depoimentos" é o destino do link do menu
    <section id="depoimentos" className={`secao ${styles.depoimentos}`}>
      <div className="container">
        <div className={styles.cabecalho}>
          <span className="rotulo">{depoimentos.etiqueta}</span>
          <h2 className="tituloSecao">{depoimentos.titulo}</h2>
        </div>

        <div className={styles.grade}>
          {depoimentos.itens.map((depoimento) => (
            <article key={depoimento.id} className={styles.card}>
              <Estrelas nota={depoimento.nota} />

              {/* <blockquote> é a tag semântica para citações */}
              <blockquote className={styles.texto}>{depoimento.texto}</blockquote>

              {/* Quem escreveu e qual tratamento fez */}
              <footer className={styles.autor}>
                <strong className={styles.nome}>{depoimento.nome}</strong>
                <span className={styles.tratamento}>{depoimento.tratamento}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
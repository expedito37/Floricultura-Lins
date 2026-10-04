// ============================================================================
// ChamadaFinal.tsx
// ----------------------------------------------------------------------------
// Faixa colorida de largura total, antes do contato, convidando a visitante a
// agendar. Serve como "último empurrão" depois de ela ter visto tratamentos,
// equipe, depoimentos e dúvidas. Dados: configuracaoSite.chamadaFinal.
// ============================================================================
import { configuracaoSite, criarLinkWhatsApp } from "../../config/siteConfig";
import styles from "./ChamadaFinal.module.css";

export default function ChamadaFinal() {
  const { chamadaFinal, whatsapp } = configuracaoSite;

  // Link do botão (mensagem padrão do WhatsApp)
  const linkWhatsapp = criarLinkWhatsApp(whatsapp.mensagemPadrao);

  return (
    // aria-labelledby liga a seção ao título abaixo (leitores de tela anunciam o nome da seção)
    <section className={styles.faixa} aria-labelledby="titulo-chamada-final">
      <div className={`container ${styles.conteudo}`}>
        <h2 id="titulo-chamada-final" className={styles.titulo}>
          {chamadaFinal.titulo}
        </h2>
        <p className={styles.texto}>{chamadaFinal.texto}</p>

        {/* "btn" vem do index.css; styles.botao troca as cores para branco */}
        <a
          href={linkWhatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn ${styles.botao}`}
        >
          {chamadaFinal.botao}
        </a>
      </div>
    </section>
  );
}
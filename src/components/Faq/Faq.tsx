// ============================================================================
// Faq.tsx (Perguntas frequentes)
// ----------------------------------------------------------------------------
// Sanfona feita com as tags nativas <details> e <summary> do HTML: o próprio
// navegador abre e fecha, então NÃO precisa de useState nem de JavaScript, e
// já funciona com teclado e leitores de tela. O título fica em uma coluna
// à esquerda (que acompanha a rolagem no computador) e as perguntas à direita.
// Dados: configuracaoSite.faq.
// ============================================================================
import { configuracaoSite, criarLinkWhatsApp } from "../../config/siteConfig";
import styles from "./Faq.module.css";

export default function Faq() {
  const { faq, chamadaFinal, whatsapp } = configuracaoSite;

  // Link do botão da coluna esquerda (mesma mensagem padrão do site)
  const linkWhatsapp = criarLinkWhatsApp(whatsapp.mensagemPadrao);

  return (
    // id="faq" é o destino do link "Dúvidas" do menu
    <section id="faq" className="secao">
      <div className={`container ${styles.layout}`}>
        {/* Coluna esquerda: título e botão */}
        <div className={styles.lateral}>
          <span className="rotulo">{faq.etiqueta}</span>
          <h2 className="tituloSecao">{faq.titulo}</h2>
          {/* Reaproveita o texto do botão da chamada final ("Falar no WhatsApp") */}
          <a
            href={linkWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-contorno"
          >
            {chamadaFinal.botao}
          </a>
        </div>

        {/* Coluna direita: uma sanfona por pergunta */}
        <div className={styles.lista}>
          {faq.perguntas.map((item) => (
            <details key={item.id} className={styles.item}>
              {/* <summary> é a parte que fica sempre visível e recebe o clique */}
              <summary className={styles.pergunta}>{item.pergunta}</summary>
              {/* Conteúdo que aparece ao abrir */}
              <p className={styles.resposta}>{item.resposta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
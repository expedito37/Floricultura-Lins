// ============================================================================
// WhatsAppFlutuante.tsx
// ----------------------------------------------------------------------------
// Botão fixo no canto inferior direito, sempre visível enquanto a página rola.
// No computador aparece em formato de PÍLULA (ícone + texto); no celular fica
// só o ícone redondo. Um anel pulsante chama a atenção. É renderizado uma vez
// só, no App, fora do <main>.
// ============================================================================
import { configuracaoSite, criarLinkWhatsApp } from "../../config/siteConfig";
import styles from "./WhatsAppFlutuante.module.css";

export default function WhatsAppFlutuante() {
  const { chamadaFinal, whatsapp } = configuracaoSite;

  // Link com a mensagem padrão já preenchida
  const link = criarLinkWhatsApp(whatsapp.mensagemPadrao);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer" // impede que a nova aba acesse a janela do site (segurança)
      className={styles.botao}
      // No celular o texto some; o aria-label garante que leitores de tela ainda anunciem o botão
      aria-label={chamadaFinal.botao}
    >
      {/* Ícone do WhatsApp desenhado em SVG (sem biblioteca externa).
          fill="currentColor" usa a cor do texto do link (branco, definido no CSS). */}

      {/* Texto visível só no computador (o CSS esconde no celular) */}
      <span className={styles.texto}>{chamadaFinal.botao}</span>
    </a>
  );
}
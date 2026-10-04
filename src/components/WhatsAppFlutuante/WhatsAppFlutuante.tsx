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
      <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" aria-hidden="true">
        <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.36.67 4.56 1.83 6.44L4 29l7.72-1.8a11.95 11.95 0 0 0 4.3.8h.01C22.65 28 28 22.6 28 15.98 28 9.4 22.64 3 16.02 3Zm0 21.8h-.01a9.8 9.8 0 0 1-4.99-1.36l-.36-.21-3.77.88.9-3.67-.24-.38a9.77 9.77 0 0 1-1.5-5.24c0-5.4 4.4-9.8 9.98-9.8 5.57 0 9.98 4.4 9.98 9.8 0 5.42-4.42 9.98-9.99 9.98Zm5.47-7.35c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.09 3.2 5.07 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      </svg>

      {/* Texto visível só no computador (o CSS esconde no celular) */}
      <span className={styles.texto}>{chamadaFinal.botao}</span>
    </a>
  );
}
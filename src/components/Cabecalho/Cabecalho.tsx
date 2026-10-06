// ============================================================================
// Cabecalho.tsx
// ----------------------------------------------------------------------------
// Menu fixo no topo. Fica TRANSPARENTE sobre o Hero e vira BRANCO com sombra
// depois que a página rola. No celular, o menu abre como uma "gaveta" que
// desliza pela direita, com um fundo escuro atrás (diferente do dropdown do
// Viver Bem). A rolagem até as seções é feita pelo próprio CSS
// (scroll-behavior + scroll-padding-top no index.css), sem JavaScript.
// ============================================================================
import { useEffect, useState } from "react";
import { configuracaoSite, criarLinkWhatsApp } from "../../config/siteConfig";
import styles from "./Cabecalho.module.css";

// Separa as partes do painel que o header usa:
// "marca" para o nome e "cabecalho" para a imagem da logo
const { marca, cabecalho } = configuracaoSite;

export default function Cabecalho() {
  // true depois que o visitante rolou um pouco (cabeçalho vira branco)
  const [rolou, setRolou] = useState(false);
  // true quando a gaveta do menu mobile está aberta
  const [menuAberto, setMenuAberto] = useState(false);

  // Observa a rolagem da página para trocar o visual do cabeçalho
  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24);
    aoRolar(); // já acerta o estado na primeira renderização
    // passive: true evita travar a rolagem em celulares
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar); // limpeza
  }, []);

  // Enquanto a gaveta está aberta: trava a rolagem do fundo e deixa a tecla Esc fechar
  useEffect(() => {
    document.body.style.overflow = menuAberto ? "hidden" : "";

    const aoTeclar = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") setMenuAberto(false);
    };
    window.addEventListener("keydown", aoTeclar);

    return () => {
      document.body.style.overflow = ""; // sempre devolve a rolagem ao sair
      window.removeEventListener("keydown", aoTeclar);
    };
  }, [menuAberto]);

  // Fecha a gaveta (usado ao clicar em um link ou no fundo escuro)
  const fecharMenu = () => setMenuAberto(false);

  // Link do botão de pedido do menu (abre o WhatsApp com a mensagem padrão)
  const linkWhatsapp = criarLinkWhatsApp(configuracaoSite.whatsapp.mensagemPadrao);

  return (
    <header
      // "solido" = fundo branco; também fica sólido com o menu aberto
      className={`${styles.cabecalho} ${rolou || menuAberto ? styles.solido : ""}`}
    >
      <div className={`container ${styles.interno}`}>
        {/* Logo: clicar leva ao topo (id="inicio" está no Hero) */}
        <a href="#inicio" className={styles.logo} onClick={fecharMenu}>
          {/* alt="" marca a imagem como DECORATIVA: o nome da marca já é lido
              pelo texto ao lado (logoTexto). Se fosse repetido no alt, o leitor
              de tela leria "Floricultura Lins" duas vezes seguidas. */}
          <img
            className={styles.logoImagem} // classe própria da imagem (a styles.cabecalho é do <header>)
            src={cabecalho.imagem}
            alt=""
          />
          {/* Nome da marca em texto (fica ao lado da imagem do logo) */}
          <span className={styles.logoTexto}>{marca.nome}</span>
        </a>

        {/* Links do menu + botão de pedido. No celular vira a gaveta lateral */}
        <nav
          id="menu-principal"
          aria-label="Menu principal"
          className={`${styles.nav} ${menuAberto ? styles.navAberta : ""}`}
        >
          {configuracaoSite.menu.map((link) => (
            <a
              key={link.href} // "key" é obrigatório em listas do React
              href={link.href}
              className={styles.link}
              onClick={fecharMenu}
            >
              {link.label}
            </a>
          ))}

          <a
            href={linkWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-primario ${styles.botaoMenu}`}
          >
            {configuracaoSite.hero.botaoPrincipal}
          </a>
        </nav>

        {/* Botão hambúrguer (só aparece no celular). As 3 barras viram um X quando aberto */}
        <button
          type="button"
          className={`${styles.hamburguer} ${menuAberto ? styles.hamburguerAberto : ""}`}
          onClick={() => setMenuAberto((aberto) => !aberto)}
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
          aria-controls="menu-principal"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Fundo escuro atrás da gaveta: clicar nele fecha o menu */}
      {menuAberto && (
        <div className={styles.fundo} onClick={fecharMenu} aria-hidden="true" />
      )}
    </header>
  );
}
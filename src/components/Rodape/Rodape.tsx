// ============================================================================
// Rodape.tsx
// ----------------------------------------------------------------------------
// Rodapé escuro em TRÊS colunas: marca e slogan, links de navegação (os mesmos
// do menu do topo) e redes sociais, mais a barra de direitos reservados.
// Diferente do Viver Bem, aqui as redes são links de texto (sem ícones SVG).
// ============================================================================
import { configuracaoSite } from "../../config/siteConfig";
import styles from "./Rodape.module.css";

export default function Rodape() {
  const { marca, menu, redes, rodape } = configuracaoSite;

  // Ano atual calculado automaticamente, para o rodapé nunca ficar desatualizado
  const anoAtual = new Date().getFullYear();

  // Lista das redes sociais para gerar os links com um só .map()
  const listaRedes = [
    { nome: "Instagram", href: redes.instagram },
    { nome: "Facebook", href: redes.facebook },
    { nome: "TikTok", href: redes.tiktok },
  ];

  return (
    <footer className={styles.rodape}>
      <div className="container">
        <div className={styles.colunas}>
          {/* Coluna 1: marca e slogan */}
          <div>
            <p className={styles.marca}>{marca.nome}</p>
            <p className={styles.slogan}>{marca.slogan}</p>
          </div>

          {/* Coluna 2: os mesmos links do menu do topo */}
          <nav aria-label={rodape.tituloMenu}>
            <h3 className={styles.titulo}>{rodape.tituloMenu}</h3>
            <ul className={styles.lista}>
              {menu.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Coluna 3: redes sociais (abrem em nova aba, de forma segura) */}
          <div>
            <h3 className={styles.titulo}>{rodape.tituloRedes}</h3>
            <ul className={styles.lista}>
              {listaRedes.map((rede) => (
                <li key={rede.nome}>
                  <a
                    href={rede.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {rede.nome}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Barra final com o copyright */}
        <p className={styles.barra}>
          © {anoAtual} {marca.nome}. {rodape.direitos}
        </p>
      </div>
    </footer>
  );
}
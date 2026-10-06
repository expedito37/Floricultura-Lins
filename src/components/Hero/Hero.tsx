// ============================================================================
// Hero.tsx
// ----------------------------------------------------------------------------
// Primeira seção da página, em DUAS COLUNAS: texto e botões à esquerda, foto
// em formato de arco à direita (na Floricultura Lins, o retrato da fundadora).
// A seção também tem uma IMAGEM DE FUNDO (configuracaoSite.hero.backgroundImagem),
// aplicada na <section> inteira para cobrir a largura toda da tela.
// Enquanto configuracaoSite.hero.imagem estiver vazio, aparece um espaço
// reservado colorido no lugar da foto.
// Animação: um IntersectionObserver observa a seção e liga a classe
// "visivel", que dispara as animações do Hero.module.css.
// ============================================================================
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { configuracaoSite, criarLinkWhatsApp } from "../../config/siteConfig";
import styles from "./Hero.module.css";

export default function Hero() {
  // Desestruturação: pega só os grupos que este componente usa
  const { hero, whatsapp } = configuracaoSite;

  // Link do botão principal (abre o WhatsApp com a mensagem padrão)
  const linkWhatsapp = criarLinkWhatsApp(whatsapp.mensagemPadrao);

  // Referência à <section>, para o observador saber o que vigiar
  const secaoRef = useRef<HTMLElement | null>(null);

  // Guarda se a seção está visível na tela (true = animações rodando)
  // Em navegadores sem IntersectionObserver, já começa como true
  const [visivel, setVisivel] = useState(
    () => typeof window !== "undefined" && !("IntersectionObserver" in window)
  );

  useEffect(() => {
    const secao = secaoRef.current;

    // Sem seção na tela ou sem suporte ao observador: não há nada para vigiar
    if (!secao || !("IntersectionObserver" in window)) return;

    // Observador: avisa quando a seção entra na tela
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          // Liga a animação e PARA de observar: roda uma vez só
          setVisivel(true);
          observador.disconnect();
        }
      },
      // 10% visível já dispara
      { threshold: 0.1 }
    );

    observador.observe(secao);

    // Limpeza: para de observar quando o componente sai da tela
    return () => observador.disconnect();
  }, []);

  // Estilo da imagem de fundo: só é criado se houver imagem no siteConfig.
  // O tamanho, a posição e a película escura por cima ficam no Hero.module.css
  const estiloFundo: CSSProperties | undefined = hero.backgroundImagem
    ? { backgroundImage: `url(${hero.backgroundImagem})` }
    : undefined;

  return (
    // id="inicio" é o destino do logo do cabeçalho
    // A classe "visivel" só é adicionada quando a seção está na tela
    // style={estiloFundo} aplica a imagem de fundo na seção inteira
    <section
      id="inicio"
      ref={secaoRef}
      className={`${styles.hero} ${visivel ? styles.visivel : ""}`}
      style={estiloFundo}
    >
      {/* Grade de duas colunas (texto à esquerda, foto à direita) */}
      <div className={`container ${styles.grade}`}>
        {/* Coluna do texto */}
        <div className={styles.texto}>
          {/* Etiqueta pequena acima do título (estilo vem do Hero.module.css,
              para ter cor própria sobre a foto de fundo) */}
          <span className={styles.rotulo}>{hero.etiqueta}</span>

          {/* Único h1 da página (bom para SEO) */}
          <h1 className={styles.titulo}>{hero.titulo}</h1>
          <p className={styles.subtitulo}>{hero.subtitulo}</p>

          {/* "btn", "btn-primario" e "btn-contorno" vêm do index.css */}
          <div className={styles.acoes}>
            <a
              href={linkWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primario"
            >
              {hero.botaoPrincipal}
            </a>
            {/* Rola até a seção com id="tratamentos" (catálogo de produtos) */}
            <a href="#tratamentos" className="btn btn-contorno">
              {hero.botaoSecundario}
            </a>
          </div>
        </div>

        {/* Lado direito: texto curto + imagem, um ao lado do outro */}
        <div className={styles.ladoImagem}>
          {/* Texto ao lado da imagem (vem do siteConfig; só aparece se existir) */}
          {hero.textoImagem && (
            // Div que agrupa título e parágrafo, para o JSX ter um único elemento pai
            <div className={styles.textoLado}>
              {/* h2 (e não h1) porque a página só pode ter um h1 */}
              <h2 className={styles.textoImagemH1}>{hero.textoImagemH1}</h2>
              <p className={styles.textoImagem}>{hero.textoImagem}</p>
            </div>
          )}

          {/* Coluna da imagem */}
          <div className={styles.visual}>
            {hero.imagem ? (
              // Com foto definida no siteConfig.
              // O alt usa o nome da pessoa da foto (textoImagemH1); se esse campo
              // estiver vazio (é opcional), usa um texto genérico como reserva.
              // O operador ?? usa o texto da direita só quando o da esquerda é undefined.
              <img
                className={styles.foto}
                src={hero.imagem}
                alt={hero.textoImagemH1 ?? "Foto principal da floricultura"}
              />
            ) : (
              // Sem foto: espaço reservado (role="img" + aria-label para leitores de tela)
              <div
                className={styles.espacoFoto}
                role="img"
                aria-label="Espaço reservado para a foto principal"
              >
                <span>Foto principal</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
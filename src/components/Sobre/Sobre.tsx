// ============================================================================
// Sobre.tsx
// ----------------------------------------------------------------------------
// Seção "Sobre a floricultura" em duas colunas: uma colagem com duas fotos à
// esquerda (uma grande e uma pequena sobreposta) e, à direita, título, texto
// e a lista numerada de valores. Os textos e as imagens vêm de
// configuracaoSite.sobre.
// ============================================================================
import { configuracaoSite } from "../../config/siteConfig";
import styles from "./Sobre.module.css";

export default function Sobre() {
  const { sobre } = configuracaoSite;

  return (
    // id="sobre" é o destino do link "Sobre" do menu. "secao" (global) dá o espaçamento padrão
    <section id="sobre" className="secao">
      <div className={`container ${styles.grade}`}>
        {/* Colagem de fotos. aria-hidden = leitores de tela ignoram, e por isso
            o alt das imagens fica vazio (são decorativas, o texto ao lado já conta a história).
            Cada <img> só é desenhada se o campo existir no siteConfig (são opcionais);
            sem foto, o bloco continua aparecendo com a cor de fundo do CSS.
            loading="lazy" faz o navegador baixar a foto só quando ela chega perto da tela. */}
        <div className={styles.colagem} aria-hidden="true">
          <div className={styles.blocoGrande}>
            {sobre.imagSobreGrande && (
              <img src={sobre.imagSobreGrande} alt="" loading="lazy" />
            )}
          </div>
          <div className={styles.blocoPequeno}>
            {sobre.imagSobrePequeno && (
              <img src={sobre.imagSobrePequeno} alt="" loading="lazy" />
            )}
          </div>
        </div>

        {/* Coluna de texto */}
        <div>
          <span className="rotulo">{sobre.etiqueta}</span>
          <h2 className="tituloSecao">{sobre.titulo}</h2>
          <p className={styles.texto}>{sobre.texto}</p>

          {/* Lista ordenada dos valores da floricultura */}
          <ol className={styles.valores}>
            {sobre.valores.map((valor, indice) => (
              <li key={valor.id} className={styles.valor}>
                {/* padStart(2, "0") transforma 1 em "01", 2 em "02"... */}
                <span className={styles.numero}>
                  {String(indice + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className={styles.valorTitulo}>{valor.titulo}</h3>
                  <p className={styles.valorTexto}>{valor.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
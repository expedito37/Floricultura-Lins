// ============================================================================
// Sobre.tsx
// ----------------------------------------------------------------------------
// Seção "Sobre a clínica" em duas colunas: uma colagem decorativa à esquerda
// (dois blocos coloridos que fazem o papel de fotos) e, à direita, título,
// texto e a lista numerada de valores. Os textos vêm de configuracaoSite.sobre.
// ============================================================================
import { configuracaoSite } from "../../config/siteConfig";
import styles from "./Sobre.module.css";

export default function Sobre() {
  const { sobre } = configuracaoSite;

  return (
    // id="sobre" é o destino do link "Sobre" do menu. "secao" (global) dá o espaçamento padrão
    <section id="sobre" className="secao">
      <div className={`container ${styles.grade}`}>
        {/* Colagem decorativa. aria-hidden = leitores de tela ignoram.
            Quando tiver fotos, troque cada bloco por uma <img> com a mesma classe. */}
        <div className={styles.colagem} aria-hidden="true">
          <div className={styles.blocoGrande}>  
            <img src={sobre.imagSobreGrande} alt=""/></div>
          <div className={styles.blocoPequeno}>
             <img src={sobre.imagSobrePequeno} alt=""/></div>
      </div>
       

        {/* Coluna de texto */}
        <div>
          <span className="rotulo">{sobre.etiqueta}</span>
          <h2 className="tituloSecao">{sobre.titulo}</h2>
          <p className={styles.texto}>{sobre.texto}</p>

          {/* Lista ordenada dos valores da clínica */}
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
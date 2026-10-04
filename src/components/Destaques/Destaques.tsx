// ============================================================================
// Destaques.tsx
// ----------------------------------------------------------------------------
// Faixa com 4 números da clínica (clientes, anos, nota...). Ela "sobe" um
// pouco sobre o final do Hero (margem negativa no CSS), criando uma
// transição entre as duas seções. Os dados vêm de configuracaoSite.destaques.
// ============================================================================
import { configuracaoSite } from "../../config/siteConfig";
import styles from "./Destaques.module.css";

export default function Destaques() {
  return (
    // aria-label dá um nome à seção para leitores de tela (ela não tem título visível)
    <section className={styles.faixa} aria-label="A clínica em números">
      <div className="container">
        {/* <ul>/<li>: é uma lista de itens, então a tag semântica é a de lista */}
        <ul className={styles.cartao}>
          {configuracaoSite.destaques.map((destaque) => (
            <li key={destaque.id} className={styles.item}>
              {/* Número grande */}
              <strong className={styles.valor}>{destaque.valor}</strong>
              {/* Descrição pequena embaixo */}
              <span className={styles.legenda}>{destaque.rotulo}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
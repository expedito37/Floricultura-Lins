// ============================================================================
// ComoFunciona.tsx
// ----------------------------------------------------------------------------
// Passo a passo do pedido (Escolha → Peça pelo WhatsApp → Montamos →
// Entregamos). No computador os passos ficam lado a lado, ligados por uma
// linha tracejada; no celular ficam empilhados. Os dados vêm de
// configuracaoSite.comoFunciona.
// ============================================================================
import { configuracaoSite } from "../../config/siteConfig";
import styles from "./ComoFunciona.module.css";

export default function ComoFunciona() {
  // Desestruturação: pega só o grupo "comoFunciona" do painel de controle
  const { comoFunciona } = configuracaoSite;

  return (
    // id="como-funciona" permite criar um link de menu para esta seção, se quiser
    // (hoje o menu do siteConfig não aponta para ela)
    <section id="como-funciona" className="secao">
      <div className="container">
        {/* Cabeçalho centralizado */}
        <div className={styles.cabecalho}>
          <span className="rotulo">{comoFunciona.etiqueta}</span>
          <h2 className="tituloSecao">{comoFunciona.titulo}</h2>
        </div>

        {/* <ol> = lista ordenada: a ordem dos passos importa */}
        <ol className={styles.passos}>
          {/* .map percorre os passos do siteConfig e cria um <li> para cada um.
              "indice" é a posição do passo na lista, começando em 0. */}
          {comoFunciona.passos.map((passo, indice) => (
            <li key={passo.id} className={styles.passo}>
              {/* Círculo com o número do passo (indice começa em 0, por isso +1) */}
              <span className={styles.numero}>{indice + 1}</span>
              <h3 className={styles.titulo}>{passo.titulo}</h3>
              <p className={styles.descricao}>{passo.descricao}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
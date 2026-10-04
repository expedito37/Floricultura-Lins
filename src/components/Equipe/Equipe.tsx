// ============================================================================
// Equipe.tsx
// ----------------------------------------------------------------------------
// Cards das profissionais. Se a profissional tiver foto (campo "imagem" no
// siteConfig), mostra a foto; se não tiver, mostra um círculo colorido com as
// INICIAIS do nome. Os dados vêm de configuracaoSite.equipe.
// ============================================================================
import { configuracaoSite } from "../../config/siteConfig";
import styles from "./Equipe.module.css";

// Função auxiliar: transforma "Dra. Helena Duarte" em "HD".
// 1) tira o tratamento inicial (Dr./Dra.)  2) separa em palavras
// 3) pega a primeira letra das duas primeiras palavras  4) deixa em maiúsculas
function pegarIniciais(nome: string): string {
  const palavras = nome
    .replace(/^Dra?\.\s+/i, "")
    .split(" ")
    .filter(Boolean); // remove espaços vazios
  return palavras
    .slice(0, 2)
    .map((palavra) => palavra[0])
    .join("")
    .toUpperCase();
}

export default function Equipe() {
  const { equipe } = configuracaoSite;

  return (
    // id="equipe" é o destino do link "Equipe" do menu
    <section id="equipe" className={`secao ${styles.equipe}`}>
      <div className="container">
        {/* Cabeçalho centralizado */}
        <div className={styles.cabecalho}>
          <span className="rotulo">{equipe.etiqueta}</span>
          <h2 className="tituloSecao">{equipe.titulo}</h2>
        </div>

        <div className={styles.grade}>
          {equipe.membros.map((membro) => (
            <article key={membro.id} className={styles.card}>
              {/* Foto ou iniciais */}
              <div className={styles.avatar}>
                {membro.imagem ? (
                  <img src={membro.imagem} alt={`Foto de ${membro.nome}`} />
                ) : (
                  // aria-hidden: o nome já aparece em texto logo abaixo
                  <span className={styles.iniciais} aria-hidden="true">
                    {pegarIniciais(membro.nome)}
                  </span>
                )}
              </div>

              <h3 className={styles.nome}>{membro.nome}</h3>
              <p className={styles.especialidade}>{membro.especialidade}</p>
              <p className={styles.bio}>{membro.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
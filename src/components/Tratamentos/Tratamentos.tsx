// ============================================================================
// Tratamentos.tsx
// ----------------------------------------------------------------------------
// Lista de tratamentos com FILTRO POR CATEGORIA (Todos, Facial, Corporal...).
// Guardamos no estado qual categoria está ativa e mostramos só os tratamentos
// dela. Cada card tem um link que abre o WhatsApp já citando o tratamento.
// Tudo vem de configuracaoSite.tratamentos.
// ============================================================================
import { useState } from "react";
import { configuracaoSite, criarLinkTratamento } from "../../config/siteConfig";
import styles from "./Tratamentos.module.css";

export default function Tratamentos() {
  const { tratamentos } = configuracaoSite;

  // Regra do template: a PRIMEIRA categoria da lista (no exemplo, "Todos")
  // mostra todos os tratamentos, sem filtrar.
  const categoriaTodos = tratamentos.categorias[0];

  // Categoria selecionada agora (começa em "Todos")
  const [categoriaAtiva, setCategoriaAtiva] = useState(categoriaTodos);

  // Lista que será desenhada: tudo, ou só os itens da categoria escolhida
  const itensVisiveis =
    categoriaAtiva === categoriaTodos
      ? tratamentos.itens
      : tratamentos.itens.filter((item) => item.categoria === categoriaAtiva);

  return (
    // id="tratamentos" é o destino do menu e do botão secundário do Hero.
    // O fundo rosa claro vem do CSS Module (alterna com as seções brancas).
    <section id="tratamentos" className={`secao ${styles.tratamentos}`}>
      <div className="container">
        {/* Cabeçalho centralizado da seção */}
        <div className={styles.cabecalho}>
          <span className="rotulo">{tratamentos.etiqueta}</span>
          <h2 className="tituloSecao">{tratamentos.titulo}</h2>
          <p className={styles.subtitulo}>{tratamentos.subtitulo}</p>
        </div>

        {/* Botões de filtro. aria-pressed avisa leitores de tela qual está ativo */}
        <div className={styles.abas} role="group" aria-label="Filtrar tratamentos por categoria">
          {tratamentos.categorias.map((categoria) => (
            <button
              key={categoria}
              type="button"
              className={`${styles.aba} ${categoria === categoriaAtiva ? styles.abaAtiva : ""}`}
              aria-pressed={categoria === categoriaAtiva}
              onClick={() => setCategoriaAtiva(categoria)}
            >
              {categoria}
            </button>
          ))}
        </div>

        {/* key={categoriaAtiva}: ao trocar de aba o React recria a grade,
            e isso reinicia a animação de entrada dos cards */}
        <div className={styles.grade} key={categoriaAtiva}>
          {itensVisiveis.map((item) => (
            <article key={item.id} className={styles.card}>
              {/* Emoji decorativo dentro de um círculo */}
              <span className={styles.icone} aria-hidden="true">
                {item.icone}
              </span>

              <h3 className={styles.nome}>{item.nome}</h3>
              <p className={styles.descricao}>{item.descricao}</p>

              {/* Rodapé do card: duração à esquerda, link do WhatsApp à direita */}
              <div className={styles.rodape}>
                <span className={styles.duracao}>{item.duracao}</span>
                <a
                  href={criarLinkTratamento(item.nome)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  {tratamentos.textoBotao} <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
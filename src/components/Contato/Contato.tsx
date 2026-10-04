// ============================================================================
// Contato.tsx
// ----------------------------------------------------------------------------
// Três cartões de informação (endereço, e-mail/telefone e horários) ao lado
// do mapa do Google. O <iframe> no formato "output=embed" não precisa de chave
// de API. Todos os textos vêm de configuracaoSite.contato.
// ============================================================================
import { configuracaoSite } from "../../config/siteConfig";
import styles from "./Contato.module.css";

export default function Contato() {
  const { contato } = configuracaoSite;

  // Deixa só os números do telefone, para o link "tel:" funcionar no celular.
  // Exemplo: "(11) 99999-9999" vira "11999999999"
  const telefoneSoNumeros = contato.telefone.replace(/\D/g, "");

  return (
    // id="contato" é o destino do link "Contato" do menu
    <section id="contato" className="secao">
      <div className="container">
        {/* Cabeçalho centralizado */}
        <div className={styles.cabecalho}>
          <span className="rotulo">{contato.etiqueta}</span>
          <h2 className="tituloSecao">{contato.titulo}</h2>
        </div>

        <div className={styles.grade}>
          {/* Coluna esquerda: os três cartões */}
          <div className={styles.infos}>
            {/* Cartão 1: endereço. <address> é a tag semântica para endereços */}
            <article className={styles.cartao}>
              <h3 className={styles.subtitulo}>{contato.tituloEndereco}</h3>
              <address className={styles.endereco}>
                {contato.endereco}
                <br />
                {contato.cidade}
              </address>
            </article>

            {/* Cartão 2: e-mail e telefone clicáveis */}
            <article className={styles.cartao}>
              <h3 className={styles.subtitulo}>{contato.tituloContato}</h3>
              <p className={styles.linha}>
                <a href={`mailto:${contato.email}`} className={styles.link}>
                  {contato.email}
                </a>
              </p>
              <p className={styles.linha}>
                <a href={`tel:${telefoneSoNumeros}`} className={styles.link}>
                  {contato.telefone}
                </a>
              </p>
            </article>

            {/* Cartão 3: horários, um por linha */}
            <article className={styles.cartao}>
              <h3 className={styles.subtitulo}>{contato.tituloHorarios}</h3>
              <ul className={styles.horarios}>
                {contato.horarios.map((horario) => (
                  <li key={horario.dias} className={styles.horario}>
                    <span>{horario.dias}</span>
                    <strong>{horario.horas}</strong>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          {/* Coluna direita: mapa */}
          <div className={styles.mapa}>
            {/* title = descrição do mapa para leitores de tela.
                loading="lazy" = só carrega quando o visitante chega perto. */}
            <iframe
              src={contato.urlMapaEmbed}
              title={contato.tituloMapa}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
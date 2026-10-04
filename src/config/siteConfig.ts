// ============================================================================
// siteConfig.ts — Aura Estética (site 2)
// ----------------------------------------------------------------------------
// Painel de controle do site: todo texto, número e lista vem daqui.
// Diferente do Viver Bem, os dados aqui estão AGRUPADOS por seção
// (configuracaoSite.hero, configuracaoSite.contato...) em vez de uma lista
// solta de campos. Isso deixa o arquivo mais fácil de navegar quando o site
// cresce. Os dados são de exemplo: troque pelos da clínica real.
// ============================================================================

// ----------------------------------------------------------------------------
// TIPOS (moldes dos dados). Se criar um campo novo, declare aqui primeiro.
// ----------------------------------------------------------------------------

// Um link do menu do topo
export interface LinkMenu {
  href: string; // id da seção, ex.: "#tratamentos"
  label: string; // texto que aparece no menu
}

// Um número em destaque (faixa logo abaixo do Hero)
export interface Destaque {
  id: string;
  valor: string; // ex.: "+2.500"
  rotulo: string; // ex.: "clientes atendidas"
}

// Um valor/princípio da clínica (seção Sobre)
export interface ValorMarca {
  id: string;
  titulo: string;
  texto: string;
}

// Um tratamento da lista (seção Tratamentos)
export interface Tratamento {
  id: string;
  categoria: string; // precisa ser igual a um item de "categorias" abaixo
  nome: string;
  descricao: string;
  duracao: string; // ex.: "60 min"
  icone: string; // emoji decorativo
}

// Um passo do "Como funciona"
export interface Passo {
  id: string;
  titulo: string;
  descricao: string;
}

// Uma profissional da equipe
export interface Profissional {
  id: string;
  nome: string;
  especialidade: string;
  bio: string;
  imagem?: string; // opcional: sem foto, o componente mostra um espaço reservado
}

// Um depoimento de cliente
export interface Depoimento {
  id: string;
  nome: string;
  tratamento: string; // tratamento que a cliente fez
  texto: string;
  nota: number; // de 1 a 5 estrelas
}

// Uma pergunta frequente
export interface PerguntaFaq {
  id: string;
  pergunta: string;
  resposta: string;
}

// Um horário de funcionamento
export interface Horario {
  dias: string; // ex.: "Segunda a sexta"
  horas: string; // ex.: "09h às 19h"
}

// Molde central com TUDO que o site usa
export interface ConfiguracaoSite {
  marca: { nome: string; slogan: string };
   // Imagem exibida no cabeçalho (logo no topo do site)
  cabecalho: { imagem: string };
  menu: LinkMenu[];
  whatsapp: {
    numero: string; // formato internacional: 55 + DDD + número
    mensagemPadrao: string;
    mensagemTratamento: string; // usa {tratamento} como espaço para o nome
  };
   hero: {
    etiqueta: string; // frase pequena acima do título
    titulo: string;
    subtitulo: string;
    botaoPrincipal: string;
    botaoSecundario: string;
    imagem?: string; // foto em arco, na coluna da direita
    textoImagemH1?: string; // título do texto ao lado da foto
    textoImagem?: string; // parágrafo do texto ao lado da foto
    backgroundImagem?: string;
  };
          //Destaques
  destaques: Destaque[];
  sobre: {
    imagSobrePequeno?: string;
    imagSobreGrande?: string;
    etiqueta: string;
    titulo: string;
    texto: string;
    valores: ValorMarca[];
  };
  tratamentos: {
    etiqueta: string;
    titulo: string;
    subtitulo: string;
    categorias: string[]; // vira as abas do filtro
    itens: Tratamento[];
    textoBotao: string;
  };
  comoFunciona: { etiqueta: string; titulo: string; passos: Passo[] };
  equipe: { etiqueta: string; titulo: string; membros: Profissional[] };
  depoimentos: { etiqueta: string; titulo: string; itens: Depoimento[] };
  faq: { etiqueta: string; titulo: string; perguntas: PerguntaFaq[] };
  chamadaFinal: { titulo: string; texto: string; botao: string };
  contato: {
    etiqueta: string;
    titulo: string;
    tituloEndereco: string; // subtítulo do cartão de endereço
    endereco: string;
    cidade: string;
    tituloContato: string; // subtítulo do cartão de e-mail/telefone
    email: string;
    telefone: string;
    tituloHorarios: string; // subtítulo do cartão de horários
    horarios: Horario[];
    urlMapaEmbed: string;
    tituloMapa: string; // descrição do mapa para leitores de tela
  };
  redes: { instagram: string; facebook: string; tiktok: string };
  // Textos fixos do rodapé
  rodape: { tituloMenu: string; tituloRedes: string; direitos: string };
}

// ----------------------------------------------------------------------------
// DADOS — Aura Estética (exemplo)
// ----------------------------------------------------------------------------
export const configuracaoSite: ConfiguracaoSite = {
  marca: {
    nome: "Aura Estética",
    slogan: "Cuidado que revela o seu melhor",  //lá em cima na aba
  },
 cabecalho: {
    imagem: "/aura2.webp",
  },
  // Os "href" precisam bater com os id das seções no App
  menu: [
    { href: "#sobre", label: "Sobre" },
    { href: "#tratamentos", label: "Tratamentos" },
    { href: "#equipe", label: "Equipe" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#faq", label: "Dúvidas" },
    { href: "#contato", label: "Contato" },
  ],

  whatsapp: {
    numero: "5531996218382",
    mensagemPadrao: "Olá! Gostaria de agendar uma avaliação na Aura Estética.",
    mensagemTratamento: "Olá! Tenho interesse no tratamento: {tratamento}. Pode me passar mais informações?",
  },

  hero: {
    etiqueta: "Estética avançada e acolhedora",
    titulo: "Realce a sua beleza",
    subtitulo:"Protocolos personalizados de estética facial e corporal, em um ambiente pensado para o seu bem-estar.",
    botaoPrincipal: "Agendar avaliação",
    botaoSecundario: "Conhecer tratamentos",
    imagem: "/doutora.webp", // coloque o caminho da foto (ex.: "/hero.webp"); vazio = espaço reservado
    textoImagemH1: "Dra. Helena Duarte",
    textoImagem: "Cuidado individual, do primeiro contato ao resultado final.",
    backgroundImagem: "/equipe1.webp"
  },
                //Destaques
  destaques: [
    { id: "1", valor: "+2.500", rotulo: "clientes atendidas" },
    { id: "2", valor: "8 anos", rotulo: "de experiência" },
    { id: "3", valor: "4.9/5", rotulo: "avaliação média" },
    { id: "4", valor: "", rotulo: "Avaliação individual antes de cada tratamento" },
  ],

  sobre: {
    imagSobreGrande:"/equipe1.webp",
    imagSobrePequeno:"/clinic1.webp",
    etiqueta: "Sobre a clínica",
    titulo: "Estética feita com ciência e cuidado",
    texto:
      "A Aura nasceu para unir tecnologia, técnica e atenção individual. Cada plano de tratamento começa com uma avaliação detalhada, para que o resultado respeite a sua história e a sua naturalidade.",
    valores: [
      { id: "1", titulo: "Segurança", texto: "Produtos regulamentados e protocolos rigorosos de biossegurança." },
      { id: "2", titulo: "Naturalidade", texto: "Resultados sutis que valorizam os seus traços, sem exageros." },
      { id: "3", titulo: "Acolhimento", texto: "Atendimento sem pressa, em um espaço calmo e confortável." },
    ],
  },

  tratamentos: {
    etiqueta: "Tratamentos",
    titulo: "Escolha o cuidado ideal para você",
    subtitulo: "Filtre por categoria e agende uma avaliação sem compromisso.",
    categorias: ["Todos", "Facial", "Corporal", "Injetáveis"],
    textoBotao: "Quero saber mais",
    itens: [
      { id: "1", categoria: "Facial", nome: "Limpeza de Pele Profunda", descricao: "Remove impurezas e renova a textura da pele.", duracao: "60 min", icone: "✨" },
      { id: "2", categoria: "Facial", nome: "Peeling Renovador", descricao: "Uniformiza o tom e suaviza manchas e marcas.", duracao: "45 min", icone: "🌿" },
      { id: "3", categoria: "Facial", nome: "Microagulhamento", descricao: "Estimula o colágeno e melhora a firmeza.", duracao: "50 min", icone: "💧" },
      { id: "4", categoria: "Corporal", nome: "Drenagem Linfática", descricao: "Reduz o inchaço e traz sensação de leveza.", duracao: "60 min", icone: "🌊" },
      { id: "5", categoria: "Corporal", nome: "Massagem Modeladora", descricao: "Contorna o corpo e melhora a circulação.", duracao: "50 min", icone: "💆" },
      { id: "6", categoria: "Corporal", nome: "Criolipólise", descricao: "Reduz gordura localizada sem cirurgia.", duracao: "70 min", icone: "❄️" },
      { id: "7", categoria: "Injetáveis", nome: "Toxina Botulínica", descricao: "Suaviza linhas de expressão de forma natural.", duracao: "30 min", icone: "🎯" },
      { id: "8", categoria: "Injetáveis", nome: "Preenchimento Labial", descricao: "Define contorno e hidratação dos lábios.", duracao: "40 min", icone: "💋" },
    ],
  },

  comoFunciona: {
    etiqueta: "Como funciona",
    titulo: "Do primeiro contato ao resultado",
    passos: [
      { id: "1", titulo: "Avaliação", descricao: "Conversamos sobre seus objetivos e analisamos sua pele e histórico." },
      { id: "2", titulo: "Plano personalizado", descricao: "Montamos o protocolo ideal, com clareza de etapas e prazos." },
      { id: "3", titulo: "Tratamento", descricao: "Sessões confortáveis, com equipamentos e produtos de qualidade." },
      { id: "4", titulo: "Acompanhamento", descricao: "Revisamos os resultados e ajustamos o cuidado ao longo do tempo." },
    ],
  },
                  //Equipe
  equipe: {
    etiqueta: "Nossa equipe",
    titulo: "Quem cuida de você",
    membros: [
      { id: "1", nome: "Dra. Helena Duarte", especialidade: "Biomédica esteta", bio: "Especialista em harmonização facial e protocolos de rejuvenescimento.", imagem: "/doutora.webp" },
      { id: "2", nome: "Marina Costa", especialidade: "Esteticista", bio: "Referência em tratamentos faciais e cuidados com a pele.", imagem: "/doct.webp" },
      { id: "3", nome: "Camila Andrade", especialidade: "Fisioterapeuta dermatofuncional", bio: "Atua com terapias corporais, drenagem e modelagem.", imagem: "" },
    ],
  },
                    // Depoimentos
  depoimentos: {
    etiqueta: "Depoimentos",
    titulo: "O que dizem nossas clientes",
    itens: [
      { id: "1", nome: "Juliana M.", tratamento: "Limpeza de Pele Profunda", texto: "Atendimento impecável. Minha pele nunca esteve tão bonita e me senti muito bem cuidada.", nota: 5 },
      { id: "2", nome: "Fernanda R.", tratamento: "Toxina Botulínica", texto: "Resultado natural, exatamente como eu queria. A equipe explicou cada etapa com paciência.", nota: 5 },
      { id: "3", nome: "Patrícia L.", tratamento: "Drenagem Linfática", texto: "Ambiente tranquilo e profissionais atenciosas. Já virou parte da minha rotina de autocuidado.", nota: 5 },
    ],
  },
                   //Perguntas/Faq
  faq: {
    etiqueta: "Dúvidas frequentes",
    titulo: "Perguntas que sempre recebemos",
    perguntas: [
      { id: "1", pergunta: "Preciso fazer avaliação antes do tratamento?", resposta: "Sim. A avaliação permite indicar o protocolo mais seguro e eficaz para o seu caso." },
      { id: "2", pergunta: "Os procedimentos doem?", resposta: "A maioria causa apenas um leve desconforto. Quando necessário, usamos anestésico tópico." },
      { id: "3", pergunta: "Em quanto tempo vejo resultados?", resposta: "Depende do tratamento. Alguns têm efeito imediato e outros evoluem ao longo das sessões." },
      { id: "4", pergunta: "Quais formas de pagamento vocês aceitam?", resposta: "Aceitamos cartões, Pix e dinheiro. Consulte condições de parcelamento pelo WhatsApp." },
      { id: "5", pergunta: "Posso remarcar ou cancelar minha sessão?", resposta: "Sim, com aviso de pelo menos 24 horas de antecedência." },
    ],
  },

  chamadaFinal: {
    titulo: "Pronta para começar o seu cuidado?",
    texto: "Agende uma avaliação e descubra o protocolo ideal para você.",
    botao: "Falar no WhatsApp",
  },

  contato: {
    etiqueta: "Contato",
    titulo: "Venha nos conhecer",
    tituloEndereco: "Onde estamos",
    endereco: "Rua Exemplo, 123 — Centro",
    cidade: "São Paulo — SP",
    tituloContato: "Fale conosco",
    email: "contato@auraestetica.com.br",
    telefone: "(11) 99999-9999",
    tituloHorarios: "Horários",
    horarios: [
      { dias: "Segunda a sexta", horas: "09h às 19h" },
      { dias: "Sábado", horas: "09h às 15h" },
      { dias: "Domingo e feriados", horas: "Fechado" },
    ],
    // Troque pelo endereço real. Formato "output=embed" não precisa de chave de API.
    urlMapaEmbed: "https://www.google.com/maps?q=Sao+Paulo+SP&output=embed",
    tituloMapa: "Mapa com a localização da Aura Estética",
  },

  redes: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    tiktok: "https://tiktok.com/",
  },

  rodape: {
    tituloMenu: "Navegação",
    tituloRedes: "Redes sociais",
    direitos: "Todos os direitos reservados.",
  },
};

// ----------------------------------------------------------------------------
// FUNÇÕES AUXILIARES DO WHATSAPP
// ----------------------------------------------------------------------------

// Monta o link "wa.me". encodeURIComponent deixa acentos e espaços seguros na URL.
export function criarLinkWhatsApp(
  mensagem: string,
  numero: string = configuracaoSite.whatsapp.numero
): string {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
}

// Monta o link já com o nome do tratamento dentro da mensagem
export function criarLinkTratamento(nomeTratamento: string): string {
  const mensagem = configuracaoSite.whatsapp.mensagemTratamento.replace(
    "{tratamento}",
    nomeTratamento
  );
  return criarLinkWhatsApp(mensagem);
}
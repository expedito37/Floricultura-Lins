// ============================================================================
// siteConfig.ts — Floricultura Lins (site 3 da demonstração)
// ----------------------------------------------------------------------------
// Painel de controle do site: todo texto, número, imagem e lista vem daqui.
// Os dados estão AGRUPADOS por seção (configuracaoSite.hero, .contato...).
//
// ATENÇÃO: os nomes das chaves (tratamentos, equipe, duracao...) foram MANTIDOS
// do template de clínica para não quebrar os componentes que já leem este
// arquivo. Aqui "tratamentos" = produtos da floricultura, "equipe" = floristas
// e "duracao" = prazo de entrega. Quando você renomear os componentes, renomeie
// as chaves junto.
//
// Todo o conteúdo é de EXEMPLO (demonstração ao cliente).
// ============================================================================

// ----------------------------------------------------------------------------
// TIPOS (moldes dos dados). Se criar um campo novo, declare aqui primeiro.
// O TypeScript avisa com erro se um dado não seguir o molde.
// ----------------------------------------------------------------------------

// Um link do menu do topo
export interface LinkMenu {
  href: string; // id da seção, ex.: "#produtos"
  label: string; // texto que aparece no menu
}

// Um número em destaque (faixa logo abaixo do Hero)
export interface Destaque {
  id: string;
  valor: string; // ex.: "+5.000"
  rotulo: string; // ex.: "clientes felizes"
}

// Um valor/princípio da floricultura (seção Sobre)
export interface ValorMarca {
  id: string;
  titulo: string;
  texto: string;
}

// Um produto da lista (seção "tratamentos" = catálogo de produtos)
export interface Tratamento {
  id: string; // também é a chave usada na planilha de preços (coluna "id")
  categoria: string; // precisa ser igual a um item de "categorias" abaixo
  nome: string;
  descricao: string;
  duracao: string; // aqui significa o prazo de entrega, ex.: "Entrega em 2h"
  icone: string; // emoji decorativo
  imagem?: string; // opcional: foto do produto (caminho em /public)
  preco?: string; // opcional: preço de reserva, usado se a planilha falhar
}

// Um passo do "Como funciona"
export interface Passo {
  id: string;
  titulo: string;
  descricao: string;
}

// Uma pessoa da equipe
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
  tratamento: string; // produto que a cliente comprou
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
  horas: string; // ex.: "08h às 18h"
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
    backgroundImagem?: string; // imagem de fundo do Hero
  };
  // Faixa de números em destaque
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
// PLANILHA DE PREÇOS (Google Sheets publicada como CSV)
// ----------------------------------------------------------------------------
// Cole aqui o link CSV da planilha (Arquivo > Compartilhar > Publicar na web >
// escolher a aba > formato CSV). A planilha tem duas colunas: "id" e "preco".
// Deixe "" (vazio) para usar só os preços escritos neste arquivo (campo "preco").
// URL da planilha do Google Sheets publicada como CSV para atualização dos preços
export const urlPlanilhaPrecos = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRDcvQHIDRwFz9y54GEmQFjDmFmYSJlkqQoLJ-1TF4IgbNNPLG6kk0faqTzYTOGQz-7ITbArMPHRlbG/pub?output=csv";


// ----------------------------------------------------------------------------
// IMAGENS (todas locais, sem links externos)
// ----------------------------------------------------------------------------
// Todas as imagens ficam na pasta /public (na raiz dela, sem subpasta) e são
// chamadas com "/" no começo do caminho, porque o Vite serve a pasta /public a
// partir da raiz do site. Arquivos que precisam existir em /public:
//   logo.webp -> logo do cabeçalho
//   bu2.webp  -> foto usada em TODO o resto do site (demonstração)
// Para trocar uma foto depois, coloque o arquivo novo em /public e altere o
// caminho aqui.

// ----------------------------------------------------------------------------
// DADOS — Floricultura Lins (exemplo)
// ----------------------------------------------------------------------------
export const configuracaoSite: ConfiguracaoSite = {
  marca: {
    nome: "Floricultura Lins",
    slogan: "Flores que contam o que as palavras não alcançam", // aparece na aba do navegador
  },

  // Logo do cabeçalho. O nome da floricultura aparece em texto ao lado
  // (no Cabecalho.tsx).
  cabecalho: {
    imagem: "/logo.webp",
  },

  // Os "href" precisam bater com os id das seções no App.tsx.
  // O link "Depoimentos" está comentado porque a seção está desligada no App.tsx:
  // se ele continuasse aqui, o clique não levaria a lugar nenhum. O rodapé lê
  // esta mesma lista, então o link também some de lá.
  // O bloco "depoimentos" mais abaixo fica no arquivo de propósito: o molde
  // ConfiguracaoSite exige esse campo, e assim a seção pode ser religada depois.
  menu: [
    { href: "#sobre", label: "Sobre" },
    { href: "#tratamentos", label: "Produtos" },
    { href: "#equipe", label: "Floristas" },
    // { href: "#depoimentos", label: "Depoimentos" }, // desligado junto com a seção
    { href: "#faq", label: "Dúvidas" },
    { href: "#contato", label: "Contato" },
  ],

  whatsapp: {
    numero: "5531996218382",
    mensagemPadrao: "Olá! Gostaria de fazer um pedido na Floricultura Lins.",
    // {tratamento} é trocado pelo nome do produto na função criarLinkTratamento
    mensagemTratamento: "Olá! Tenho interesse em: {tratamento}. Pode me passar mais informações?",
  },

  hero: {
    etiqueta: "Flores frescas, entrega no mesmo dia",
    titulo: "Transforme momentos em flores",
    subtitulo:
      "Buquês, arranjos e presentes montados à mão, com flores selecionadas todas as manhãs e entregues com carinho.",
    botaoPrincipal: "Fazer pedido",
    botaoSecundario: "Ver produtos",
    imagem: "/bu2.webp", // foto em arco (coluna da direita)
    textoImagemH1: "Lúcia Lins",
    textoImagem: "Cada arranjo é montado como se fosse para alguém da família.",
    backgroundImagem: "/campo.webp", // imagem de fundo do Hero
  },

  // Faixa de números em destaque
  destaques: [
    { id: "1", valor: "+5.000", rotulo: "clientes felizes" },
    { id: "2", valor: "12 anos", rotulo: "de tradição" },
    { id: "3", valor: "4.9/5", rotulo: "avaliação média" },
    { id: "4", valor: "2h", rotulo: "entrega expressa na cidade" },
  ],

  sobre: {
    imagSobreGrande: "/pessoas.webp",
    imagSobrePequeno: "/pessoas.webp",
    etiqueta: "Sobre a floricultura",
    titulo: "Tradição familiar, flores sempre frescas",
    texto:
      "A Floricultura Lins nasceu do amor pelas flores e da vontade de tornar cada ocasião especial. Escolhemos as flores todas as manhãs e montamos cada pedido com atenção, para que ele chegue lindo e dure mais.",
    valores: [
      { id: "1", titulo: "Frescor", texto: "Flores selecionadas no dia, direto dos produtores." },
      { id: "2", titulo: "Delicadeza", texto: "Cada arranjo montado à mão, com cuidado em cada detalhe." },
      { id: "3", titulo: "Pontualidade", texto: "Entrega combinada e cumprida, para o momento certo." },
    ],
  },

  // "tratamentos" = catálogo de produtos. O "id" também é usado na planilha de preços.
  tratamentos: {
    etiqueta: "Produtos",
    titulo: "Escolha a flor ideal para cada ocasião",
    subtitulo: "Filtre por categoria e peça pelo WhatsApp em poucos minutos.",
    categorias: ["Todos", "Buquês", "Arranjos", "Plantas"],
    textoBotao: "Pedir pelo WhatsApp",
    itens: [
      {
        id: "buque-rosas-vermelhas",
        categoria: "Buquês",
        nome: "Buquê de Rosas Vermelhas",
        descricao: "Doze rosas selecionadas, embaladas em papel kraft com laço de cetim.",
        duracao: "Entrega em 2h",
        icone: "🌹",
        imagem: "/bu2.webp",
        preco: "a partir de R$ 129",
      },
      {
        id: "buque-girassois",
        categoria: "Buquês",
        nome: "Buquê de Girassóis",
        descricao: "Girassóis alegres que levam luz e energia a qualquer ambiente.",
        duracao: "Entrega em 2h",
        icone: "🌻",
        imagem: "/girassol.webp",
        preco: "a partir de R$ 89",
      },
      {
        id: "buque-campestre",
        categoria: "Buquês",
        nome: "Buquê Campestre",
        descricao: "Mix delicado de flores do campo em tons suaves.",
        duracao: "Entrega em 3h",
        icone: "💐",
        imagem: "/campestre.webp",
        preco: "a partir de R$ 99",
      },
      {
        id: "arranjo-mesa",
        categoria: "Arranjos",
        nome: "Arranjo de Mesa",
        descricao: "Flores variadas em vaso de vidro, ideal para presentear e decorar.",
        duracao: "Entrega em 3h",
        icone: "🌷",
        imagem: "/bu2.webp",
        preco: "a partir de R$ 119",
      },
      {
        id: "arranjo-casamento",
        categoria: "Arranjos",
        nome: "Decoração de Casamento",
        descricao: "Arranjos e buquê de noiva sob medida para o seu grande dia.",
        duracao: "Sob encomenda",
        icone: "💍",
        imagem: "/bu2.webp",
        preco: "sob consulta",
      },
      {
        id: "arranjo-homenagem",
        categoria: "Arranjos",
        nome: "Coroa de Homenagem",
        descricao: "Coroas e arranjos fúnebres com flores brancas, entregues com respeito e agilidade.",
        duracao: "Entrega em 2h",
        icone: "🕊️",
        imagem: "/bu2.webp",
        preco: "a partir de R$ 249",
      },
      {
        id: "orquidea-phalaenopsis",
        categoria: "Plantas",
        nome: "Orquídea Phalaenopsis",
        descricao: "Orquídea em vaso decorativo, elegante e de longa duração.",
        duracao: "Entrega em 3h",
        icone: "🪻",
        imagem: "/bu2.webp",
        preco: "a partir de R$ 159",
      },
      {
        id: "suculentas-kit",
        categoria: "Plantas",
        nome: "Kit de Suculentas",
        descricao: "Três suculentas em vasos de cerâmica, fáceis de cuidar.",
        duracao: "Entrega em 3h",
        icone: "🪴",
        imagem: "/bu2.webp",
        preco: "a partir de R$ 69",
      },
    ],
  },

  comoFunciona: {
    etiqueta: "Como funciona",
    titulo: "Do pedido à entrega",
    passos: [
      { id: "1", titulo: "Escolha", descricao: "Veja os produtos no site e escolha o que combina com a ocasião." },
      { id: "2", titulo: "Peça pelo WhatsApp", descricao: "Envie o pedido, o endereço e a mensagem do cartão." },
      { id: "3", titulo: "Montamos", descricao: "Nossas floristas montam o seu pedido à mão, com flores do dia." },
      { id: "4", titulo: "Entregamos", descricao: "Entrega no horário combinado, com todo o cuidado no caminho." },
    ],
  },

  // "equipe" = floristas
  equipe: {
    etiqueta: "Nossa equipe",
    titulo: "Quem cuida das suas flores",
    membros: [
      {
        id: "1",
        nome: "Lúcia Lins",
        especialidade: "Fundadora e florista",
        bio: "Há mais de 12 anos transforma flores em presentes cheios de significado.",
        imagem: "",
      },
      {
        id: "2",
        nome: "",
        especialidade: "Decoração de eventos",
        bio: "Cuida de casamentos, aniversários e decorações sob medida.",
        imagem: "/bu2.webp",
      },
      {
        id: "3",
        nome: "Camila Andrade",
        especialidade: "Florista e atendimento",
        bio: "Ajuda cada cliente a escolher a flor certa para cada momento.",
        imagem: "/camila.webp",
      },
    ],
  },

  // Depoimentos fictícios (seção desligada no App.tsx, mas o molde exige o campo)
  depoimentos: {
    etiqueta: "Depoimentos",
    titulo: "O que dizem nossos clientes",
    itens: [
      { id: "1", nome: "Juliana M.", tratamento: "Buquê de Rosas Vermelhas", texto: "Chegou lindo e no horário combinado. Minha mãe amou, as rosas duraram mais de uma semana.", nota: 5 },
      { id: "2", nome: "Fernando R.", tratamento: "Buquê de Girassóis", texto: "Atendimento rápido pelo WhatsApp e o buquê superou o que eu esperava. Já virei cliente fiel.", nota: 5 },
      { id: "3", nome: "Patrícia L.", tratamento: "Decoração de Casamento", texto: "Cuidaram de cada detalhe da decoração. Os convidados elogiaram o dia inteiro.", nota: 5 },
    ],
  },

  faq: {
    etiqueta: "Dúvidas frequentes",
    titulo: "Perguntas que sempre recebemos",
    perguntas: [
      { id: "1", pergunta: "Vocês entregam no mesmo dia?", resposta: "Sim. Pedidos feitos até as 15h são entregues no mesmo dia na cidade e região." },
      { id: "2", pergunta: "Posso incluir um cartão com mensagem?", resposta: "Pode. Basta enviar o texto no WhatsApp que escrevemos o cartão para você, sem custo." },
      { id: "3", pergunta: "Quanto tempo as flores duram?", resposta: "Em média de 5 a 10 dias, dependendo da flor. Enviamos dicas de cuidado junto com o pedido." },
      { id: "4", pergunta: "Quais formas de pagamento vocês aceitam?", resposta: "Aceitamos Pix, cartões de crédito e débito e dinheiro na retirada." },
      { id: "5", pergunta: "Posso encomendar um arranjo personalizado?", resposta: "Sim. Conte pelo WhatsApp o que você imagina e montamos um orçamento sob medida." },
    ],
  },

  chamadaFinal: {
    titulo: "Pronto para surpreender alguém?",
    texto: "Faça seu pedido pelo WhatsApp e receba flores frescas ainda hoje.",
    botao: "Falar no WhatsApp",
  },

  // Dados fictícios de contato, troque pelos reais do cliente
  contato: {
    etiqueta: "Contato",
    titulo: "Venha nos conhecer",
    tituloEndereco: "Onde estamos",
    endereco: "Rua das Flores, 123 — Centro",
    cidade: "Belo Horizonte — MG",
    tituloContato: "Fale conosco",
    email: "contato@floriculturalins.com.br",
    telefone: "(31) 99999-9999",
    tituloHorarios: "Horários",
    horarios: [
      { dias: "Segunda a sexta", horas: "08h às 18h" },
      { dias: "Sábado", horas: "08h às 14h" },
      { dias: "Domingo e feriados", horas: "Plantão sob consulta" },
    ],
    // Troque pelo endereço real. Formato "output=embed" não precisa de chave de API.
    urlMapaEmbed: "https://www.google.com/maps?q=Belo+Horizonte+MG&output=embed",
    tituloMapa: "Mapa com a localização da Floricultura Lins",
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

// Monta o link "wa.me" que abre o WhatsApp já com a mensagem escrita.
//  - "mensagem": o texto que vai aparecer no campo de digitação.
//  - "numero": parâmetro com VALOR PADRÃO (= ...). Se quem chamar não passar o
//    número, usa o número do siteConfig; assim o componente só envia a mensagem.
//  - encodeURIComponent converte acentos, espaços e símbolos em códigos seguros
//    para URL (ex.: espaço vira %20). Sem isso, o link quebraria.
export function criarLinkWhatsApp(
  mensagem: string,
  numero: string = configuracaoSite.whatsapp.numero
): string {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
}

// Monta o link do WhatsApp já com o nome do produto dentro da mensagem.
//  - .replace("{tratamento}", nome) troca o marcador {tratamento} do modelo de
//    mensagem pelo nome real do produto. (replace com texto troca só a primeira
//    ocorrência, o que basta aqui porque o marcador aparece uma vez.)
export function criarLinkTratamento(nomeTratamento: string): string {
  const mensagem = configuracaoSite.whatsapp.mensagemTratamento.replace(
    "{tratamento}",
    nomeTratamento
  );
  return criarLinkWhatsApp(mensagem);
}

// Decide qual preço mostrar para um produto.
//  - "produto": o item do catálogo (tem o id e o preço de reserva).
//  - "precosPlanilha": o objeto devolvido pelo hook usePrecos, no formato
//    { "id-do-produto": "texto do preço" }.
//  - O operador ?? ("nullish coalescing") usa o valor da direita só quando o da
//    esquerda é undefined ou null. Ou seja: se a planilha tem o preço, usa ele;
//    se não tem, usa o preço de reserva escrito aqui; se nenhum existir,
//    devolve undefined e o componente simplesmente não mostra a linha de preço.
export function obterPrecoFinal(
  produto: Tratamento,
  precosPlanilha: Record<string, string>
): string | undefined {
  return precosPlanilha[produto.id] ?? produto.preco;
}
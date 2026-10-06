// ============================================================================
// App.tsx — Floricultura Lins
// ----------------------------------------------------------------------------
// Componente raiz: só define a ORDEM das seções. Cada seção busca os próprios
// dados em config/siteConfig.ts. Para reordenar a página, troque as linhas de
// lugar (e ajuste o menu em siteConfig.menu, se quiser).
// Nomes em português e uma pasta por componente: components/<Nome>/<Nome>.tsx
//
// ATENÇÃO: alguns componentes mantêm o nome do template de clínica
// (Tratamentos = catálogo de produtos, Equipe = floristas). O id de cada seção
// (ex.: id="tratamentos") precisa continuar igual ao "href" do menu no siteConfig.
//
// DEPOIMENTOS DESLIGADOS: eram fictícios, então a seção não aparece nesta
// floricultura. O componente continua na pasta; para religar, tire os
// comentários do import e da linha dentro do <main>, e devolva o link
// "#depoimentos" ao menu no siteConfig.
// ============================================================================
import Cabecalho from "./components/Cabecalho/Cabecalho"; // menu fixo no topo
import Hero from "./components/Hero/Hero"; // primeira dobra (texto + imagem lado a lado)
import Destaques from "./components/Destaques/Destaques"; // faixa de números
import Sobre from "./components/Sobre/Sobre"; // história e valores da floricultura
import Tratamentos from "./components/Tratamentos/Tratamentos"; // catálogo de produtos com filtro por abas e preço
import ComoFunciona from "./components/ComoFunciona/ComoFunciona"; // passo a passo do pedido
import Equipe from "./components/Equipe/Equipe"; // floristas
// import Depoimentos from "./components/Depoimentos/Depoimentos"; // desligado: avaliações de clientes (eram fictícias)
import Faq from "./components/Faq/Faq"; // perguntas frequentes (sanfona)
import ChamadaFinal from "./components/ChamadaFinal/ChamadaFinal"; // faixa de convite para pedir pelo WhatsApp
import Contato from "./components/Contato/Contato"; // endereço, horários e mapa
import Rodape from "./components/Rodape/Rodape"; // rodapé em colunas
import WhatsAppFlutuante from "./components/WhatsAppFlutuante/WhatsAppFlutuante"; // botão fixo
import VoltarAoTopo from "./components/VoltarAoTopo/VoltarAoTopo"; // botão fixo que leva ao topo da página

export default function App() {
  return (
    <>
      <Cabecalho />

      {/* Cada componente abaixo tem um id (ex.: id="sobre") que o menu usa como destino */}
      <main>
        <Hero />
        <Destaques />
        <Sobre />
        <Tratamentos />
        <ComoFunciona />
        <Equipe />
        {/* <Depoimentos /> */}
        <Faq />
        <ChamadaFinal />
        <Contato />
      </main>

      <Rodape />

      {/* Fora do <main>: elementos fixos que flutuam sobre a página inteira */}
      <WhatsAppFlutuante />
      <VoltarAoTopo />
    </>
  );
}
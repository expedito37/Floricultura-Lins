// ============================================================================
// App.tsx — Aura Estética
// ----------------------------------------------------------------------------
// Componente raiz: só define a ORDEM das seções. Cada seção busca os próprios
// dados em config/siteConfig.ts. Para reordenar a página, troque as linhas de
// lugar (e ajuste o menu em siteConfig.menu, se quiser).
// Nomes em português e uma pasta por componente: components/<Nome>/<Nome>.tsx
// ============================================================================
import Cabecalho from "./components/Cabecalho/Cabecalho"; // menu fixo no topo
import Hero from "./components/Hero/Hero"; // primeira dobra (texto + imagem lado a lado)
import Destaques from "./components/Destaques/Destaques"; // faixa de números
import Sobre from "./components/Sobre/Sobre"; // história e valores
import Tratamentos from "./components/Tratamentos/Tratamentos"; // lista com filtro por abas
import ComoFunciona from "./components/ComoFunciona/ComoFunciona"; // passo a passo
import Equipe from "./components/Equipe/Equipe"; // profissionais
import Depoimentos from "./components/Depoimentos/Depoimentos"; // avaliações de clientes
import Faq from "./components/Faq/Faq"; // perguntas frequentes (sanfona)
import ChamadaFinal from "./components/ChamadaFinal/ChamadaFinal"; // faixa de convite para agendar
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
        <Depoimentos />
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
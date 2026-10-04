// ============================================================================
// VoltarAoTopo.tsx
// ----------------------------------------------------------------------------
// Botão flutuante no canto inferior direito que leva o visitante de volta ao
// topo da página. Só aparece depois de rolar um pouco (400px) e some de novo
// quando a pessoa volta ao início.
// Fica em src/components/VoltarAoTopo/VoltarAoTopo.tsx e precisa ser colocado
// uma única vez no App.tsx (fora das seções).
// ============================================================================
import { useEffect, useState } from "react";
import styles from "./VoltarAoTopo.module.css";

// Quantos pixels a pessoa precisa rolar para o botão aparecer
const DISTANCIA_PARA_APARECER = 400;

export default function VoltarAoTopo() {
  // Guarda se o botão deve estar visível (true = já rolou o suficiente)
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    // Liga ou desliga o botão conforme a posição da rolagem
    function aoRolar() {
      setVisivel(window.scrollY > DISTANCIA_PARA_APARECER);
    }

    // Confere uma vez ao montar (caso a página já abra rolada)
    aoRolar();

    // "passive: true" avisa o navegador que não vamos bloquear a rolagem (mais fluido)
    window.addEventListener("scroll", aoRolar, { passive: true });

    // Limpeza: remove o ouvinte quando o componente sai da tela
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  // Rola suavemente até o topo
  // (quem reduz movimento no sistema vai direto, sem animação)
  function voltarAoTopo() {
    const reduzirMovimento = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: reduzirMovimento ? "auto" : "smooth",
    });
  }

  return (
    <button
      type="button"
      onClick={voltarAoTopo}
      // A classe "visivel" mostra o botão; sem ela ele fica escondido
      className={`${styles.botao} ${visivel ? styles.visivel : ""}`}
      // Descreve o botão para leitores de tela (ele só tem uma seta desenhada)
      aria-label="Voltar ao topo da página"
      // Escondido não pode receber foco pelo teclado
      tabIndex={visivel ? 0 : -1}
    >
      {/* Seta para cima desenhada em SVG (aria-hidden: o aria-label já descreve) */}
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
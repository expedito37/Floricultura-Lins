// ============================================================================
// main.tsx — ponto de entrada da Floricultura Lins
// ----------------------------------------------------------------------------
// Liga o React ao <div id="root"> do index.html e renderiza o <App />.
// ============================================================================
import { StrictMode } from "react"; // modo de desenvolvimento que avisa sobre erros comuns
import { createRoot } from "react-dom/client"; // liga o React ao HTML
import "./index.css"; // estilos globais (cores, fontes, botões...)
import App from "./App"; // componente raiz

// O "!" diz ao TypeScript que o elemento #root existe com certeza
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
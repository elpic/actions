import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Landing } from "./routes/index";
import "./styles.css";

window.__ELPIC_STATIC_PAGES__ = true;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Landing />
  </StrictMode>,
);
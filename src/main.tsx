import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GiphytApp } from "./GiphytApp.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GiphytApp />
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./GITHUBUSERSPROJECT";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Test from "./Button";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Test />
  </StrictMode>
);

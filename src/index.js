import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Layout } from "./Layout";
import "./Style.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Layout />
  </StrictMode>
);

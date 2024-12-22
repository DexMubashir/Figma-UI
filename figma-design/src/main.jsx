import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/tailwind.css";
import "./styles/index.css";
import "./styles/font.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);

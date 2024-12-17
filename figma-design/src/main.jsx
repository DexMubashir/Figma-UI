import React from "react";
import { createRoot } from "react-router-dom";
import App from "./App";
import "./styles/tailwind.css";
import "./styles/index.css";
import "./styles/font.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);

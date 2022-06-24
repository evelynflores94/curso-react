import React from "react"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./routes/App.jsx"

const rootElement = document.getElementById("app")
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
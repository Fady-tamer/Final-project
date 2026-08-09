import { createRoot } from "react-dom/client";

// components
import App from "./App.jsx";
import MainContext from "./context/MainContext.jsx";

// css
import "./index.css";

createRoot(document.getElementById("root")).render(
  <MainContext>
    <App />
  </MainContext>,
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { DevSupport } from "@react-buddy/ide-toolbox";
import { ComponentPreviews, useInitial } from "./dev/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DevSupport>,
);

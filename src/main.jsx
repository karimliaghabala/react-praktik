import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AuthContextProvider from "./CondexApi/AuthContext.jsx";
import BasketContextProvider from "./CondexApi/BasketContext.jsx";

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

rootElement.render(
  <BasketContextProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </BasketContextProvider>
);

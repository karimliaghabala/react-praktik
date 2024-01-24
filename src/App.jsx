import Header from "./components/Header";
import Footer from "./components/Footer";
import React, { useContext } from "react";
import { BasketContext } from "./CondexApi/BasketContext";

function App() {
  const { addBasket } = useContext(BasketContext);
  const addToBasket = () => {
    const id = +prompt("id-ni daxil edin");
    addBasket(id);
  };
  return (
    <>
      <Header />
      <main>
        <button onClick={addToBasket}>add ti basket</button>
      </main>
      <Footer />
    </>
  );
}

export default App;

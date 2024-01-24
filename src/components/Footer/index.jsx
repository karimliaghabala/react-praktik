import React, { useContext } from "react";
import { AuthContext } from "../../CondexApi/AuthContext";
import { products } from "../mock/products";
import { BasketContext } from "../../CondexApi/BasketContext";

const Footer = () => {
  const value = useContext(AuthContext);
  const { items } = useContext(BasketContext);
  return (
    <div style={{ background: "peru" }}>
      <span style={{ marginRight: 20 }}>Logo</span>
      <span style={{ marginRight: 20 }}>Sign {value.email}</span>
      <ul>
        {products.map((products) => {
          if (items.includes(products.id)) {
            return <li key={products.id}>{products.title}</li>;
          }
        })}
      </ul>
    </div>
  );
};

export default Footer;

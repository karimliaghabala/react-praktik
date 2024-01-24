import React, { useContext } from "react";
import { AuthContext } from "../../CondexApi/AuthContext";
import { BasketContext } from "../../CondexApi/BasketContext";

const Header = ({}) => {
  const value = useContext(AuthContext);
  const { items } = useContext(BasketContext);
  return (
    <div style={{ background: "teal" }}>
      <span style={{ marginRight: 20 }}>{value.username}</span>
      <span style={{ marginRight: 20 }}>Sign {value.email}</span>
      <p>Product @ Cart{items.length}</p>
    </div>
  );
};

export default Header;

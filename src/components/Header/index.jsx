import React, { useContext } from "react";
import { AuthContext } from "../../CondexApi/AuthContext";

const Header = () => {
  const value = useContext(AuthContext);
  return (
    <div style={{ background: "teal" }}>
      <span style={{ marginRight: 20 }}>{value.username}</span>
      <span style={{ marginRight: 20 }}>Sign {value.email}</span>
    </div>
  );
};

export default Header;

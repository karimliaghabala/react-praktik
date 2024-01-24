import React, { useContext } from "react";
import { AuthContext } from "../../CondexApi/AuthContext";

const Footer = () => {
  const value = useContext(AuthContext);
  return (
    <div style={{ background: "peru" }}>
      <span style={{ marginRight: 20 }}>Logo</span>
      <span style={{ marginRight: 20 }}>Sign {value.email}</span>
    </div>
  );
};

export default Footer;

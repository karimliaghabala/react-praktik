import React, { useState } from "react";

const Mode = () => {
  const [mode, setMode] = useState(localStorage.getItem("mode"));

  if (mode === "light") {
    document.body.className = "light";
  } else {
    document.body.className = "dark";
  }

  const defineMode = () => {
    if (mode === "light") {
      localStorage.setItem("mode", "dark");
    } else {
      localStorage.setItem("mode", "light");
    }
    setMode(localStorage.getItem("mode"));
  };
  return (
    <button onClick={defineMode}>{mode === "light" ? "Light" : "Dark"}</button>
  );
};

export default Mode;

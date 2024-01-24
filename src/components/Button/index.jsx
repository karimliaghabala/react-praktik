import React from "react";

const Button = ({ id, title, setTab, tab }) => {
  return (
    <button
      className={id === tab ? "active" : "btn"}
      key={id}
      onClick={() => {
        setTab(id);
      }}
    >
      {title}
    </button>
  );
};

export default Button;

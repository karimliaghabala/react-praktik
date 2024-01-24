import React from "react";

const Description = ({ id, description }) => {
  return <p key={id}>{description}</p>;
};

export default Description;

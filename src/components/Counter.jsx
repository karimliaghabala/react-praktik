import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Karimli Agabala");
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Welcome {name}</h1>
      <hr />
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        reset
      </button>
      <button
        onClick={() => {
          console.log(count);
        }}
      >
        log
      </button>
      <button
        onClick={() => {
          let newEded = +prompt("ededi daxil edin:");
          setCount(newEded);
        }}
      >
        special
      </button>
      <button
        onClick={() => {
          setName(prompt("Adi daxil et"));
        }}
      >
        Change Name
      </button>
    </div>
  );
};

export default Counter;

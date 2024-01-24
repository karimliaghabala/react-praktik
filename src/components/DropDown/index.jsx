import React, { useState } from "react";

const Dropdown = () => {
  const [drpdwn, setDrpdwn] = useState(false);

  return (
    <div>
      <ul>
        <li>Esas sehife</li>
        <li className="drop">
          <span
            onClick={() => {
              setDrpdwn(!drpdwn);
            }}
          >
            Temir
          </span>
          {drpdwn && (
            <ul className="dropMenu">
              <li>Esas sehife</li>
              <li>Qurashdirma</li>
              <li>Usta sifarishi</li>
              <li>Ustalar</li>
              <li>Temir novleri</li>
            </ul>
          )}
        </li>
        <li>Qurashdirma</li>
        <li>Usta sifarishi</li>
      </ul>
    </div>
  );
};

export default Dropdown;

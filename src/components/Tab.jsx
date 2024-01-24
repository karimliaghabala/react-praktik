import React, { useState } from "react";
import "../style.css";
import Button from "./Button";
import { data1 } from "../data/data1";
import Description from "./Description";
import Mode from "./Mode";
import Dropdown from "./DropDown";

function Tab() {
  const [tab, setTab] = useState(1);

  return (
    <>
      <div>
        <Mode />
      </div>
      {data1.map(({ id, title, description }) => {
        return (
          <Button key={id} id={id} title={title} setTab={setTab} tab={tab} />
        );
      })}
      <hr />
      {data1.map(({ id, description }) => {
        return (
          tab === id && (
            <Description key={id} id={id} description={description} />
          )
        );
      })}
      <hr />
      <Dropdown />
    </>
  );
}

export default Tab;

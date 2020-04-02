/* global chrome */
import React, { useState } from "react";
import "./stumblepane.css";

import Stumble from "./stumble";

const Stumblepane = () => {
  let stumbles = "";

  const [values, setValue] = useState(stumbles);

  const updateStumble = (val, index) => {
    let newVal = [...values];

    newVal[index] = val;
    setValue(newVal);
  };

  return (
    <div className="stumblepane">
      {[0, 1, 2].map(index => (
        <Stumble
          key={index}
          value={values[index]}
          setValue={val => updateStumble(val, index)}
        />
      ))}
    </div>
  );
};

export default Stumblepane;

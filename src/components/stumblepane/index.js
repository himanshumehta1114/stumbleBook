/* global chrome */
import React, { useState, useEffect } from "react";
import "./stumblepane.css";

import Stumble from "./stumble";

const Stumblepane = () => {
  let stumbles = [Array(3)];

  const [values, setValue] = useState(stumbles);

  useEffect(() => {
    chrome.storage.sync.get((res) => {
      setValue(res.stumbles)
    })
  })

  const updateStumble = (val, index) => {
    let newVal = [...values];

    newVal[index] = val;
    setValue(newVal);
    chrome.storage.sync.set({stumbles: newVal}, () => {
      setValue(newVal)
    })
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

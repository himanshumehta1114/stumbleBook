import React from "react";
import "./stumble.css";

const Stumble = ({ value, setValue }) => {
  return (
    <div className="stumble">
      <input
        type="text"
        placeholder="Type something"
        value={value || ""}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  );
};

export default Stumble;

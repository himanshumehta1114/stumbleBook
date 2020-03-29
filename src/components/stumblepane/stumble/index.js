import React from "react";
import "./stumble.css";
import EditBtn from "../../editBtn";

const Stumble = () => (
  <div className="stumble">
    <input type="text" placeholder="Type something" />
    <EditBtn />
  </div>
);

export default Stumble;

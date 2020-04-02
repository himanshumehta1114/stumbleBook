import React from "react";
import Pencil from "../../svg/pencil";
import Tick from "../../svg/tick";
import "./editBtn.css"

const EditBtn = () => (
  <button className="editBtn">
    <Pencil />
    {/* <Tick /> */}
  </button>
);

export default EditBtn;

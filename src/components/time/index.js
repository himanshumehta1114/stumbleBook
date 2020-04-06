import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import "./time.css";

const Time = () => {
  let [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 10000);
  });

  const timeStr = format(time, "hh:mm aa");
  const dateStr = format(time, "eeee, dd MMMM, yyyy")
  return (
    <div className="Time__block">
      <div className="Time">{timeStr}</div>
  <div className="Date">{dateStr}</div>
    </div>
  );
};

export default Time;

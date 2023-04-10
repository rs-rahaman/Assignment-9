import React, { useEffect, useState } from "react";
import Loca from "../Loca/Loca";

const AppliedJobs = () => {
  const [local, setLocal] = useState([]);
  useEffect(() => {
    let getTitleFromLocalStorage = JSON.parse(localStorage.getItem("details"));
    if (getTitleFromLocalStorage) {
      setLocal(getTitleFromLocalStorage);
    }
  }, []);

  return (
    <div>
      {local.map((loca, idx) => (
        <Loca key={idx} loca={loca}></Loca>
      ))}
    </div>
  );
};

export default AppliedJobs;

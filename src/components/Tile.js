import { useState } from "react";

function Tile({}) {
  let [status, setStatus] = useState(false);
  const flipStatus = () => {
    setStatus((prevStatus) => !prevStatus);
  };

  return (
    <div className={`${status ? "on" : "off"} tile`} onClick={flipStatus}></div>
  );
}

export default Tile;

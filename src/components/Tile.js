function Tile({ displayStatus, nextStatus, coords, flipStatus }) {
  return (
    <div
      onClick={() => flipStatus(coords[0], coords[1])}
      className={`${displayStatus ? "on" : "off"} tile`}
    ></div>
  );
}

export default Tile;

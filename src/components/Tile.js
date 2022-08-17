function Tile({ displayStatus, nextStatus, coords, forceFlipStatus }) {
  return (
    <div
      onClick={() => forceFlipStatus(coords[0], coords[1])}
      className={`${displayStatus ? "on" : "off"} tile`}
    ></div>
  );
}

export default Tile;

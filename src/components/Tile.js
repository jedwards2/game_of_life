function Tile({ displayStatus, coords, forceFlipStatus, note }) {
  return (
    <div
      onClick={() => forceFlipStatus(coords[0], coords[1])}
      className={`${displayStatus ? "on" : "off"} tile`}
    >
      {note}
    </div>
  );
}

export default Tile;

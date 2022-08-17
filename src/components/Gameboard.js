import Tile from "./Tile";

function Gameboard({ height, width }) {
  let tiles = [];
  for (let i = 0; i < height; i++) {
    tiles.push([]);
    for (let j = 0; j < width; j++) {
      tiles[i].push(<Tile status={false} />);
    }
  }

  const allRows = tiles.map((row, idx) => {
    return (
      <div className="tile-row" key={idx}>
        {row}
      </div>
    );
  });

  return <div>{allRows}</div>;
}

export default Gameboard;

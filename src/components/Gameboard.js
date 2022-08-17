import Tile from "./Tile";

function Gameboard({ tiles, flipStatus }) {
  const allRows = tiles.map((row, idx1) => {
    let currentRow = row.map((tile, idx2) => {
      return (
        <div key={idx1 + idx2}>
          <Tile
            displayStatus={tile.displayStatus}
            nextStatus={tile.nextStatus}
            coords={[idx1, idx2]}
            flipStatus={flipStatus}
          />
        </div>
      );
    });
    return (
      <div className="tile-row" key={idx1}>
        {currentRow}
      </div>
    );
  });

  function newRow(tiles) {
    for (let i = 0; i < tiles.length; i++) {
      for (let j = 0; j < tiles[i].length; j++) {
        let friendCount = 0;
        let status = tiles[i][j].displayStatus;

        if (status && (friendCount === 2 || friendCount === 3)) {
          tiles[i][j].nextStatus = !tiles[i][j].nextStatus;
        } else if (!status && friendCount === 3) {
          tiles[i][j].nextStatus = true;
        } else {
          tiles[i][j].nextStatus = false;
        }
      }
    }
  }

  return (
    <div>
      {allRows}
      <div>
        <button onClick={() => newRow(tiles)}>Compute New Board</button>
      </div>
    </div>
  );
}

export default Gameboard;

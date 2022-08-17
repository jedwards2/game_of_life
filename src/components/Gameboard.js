import Tile from "./Tile";

function Gameboard({
  tiles,
  forceFlipStatus,
  updateNextStatus,
  updateAllStates,
}) {
  const allRows = tiles.map((row, idx1) => {
    let currentRow = row.map((tile, idx2) => {
      return (
        <div key={idx1 + idx2}>
          <Tile
            displayStatus={tile.displayStatus}
            nextStatus={tile.nextStatus}
            coords={[idx1, idx2]}
            forceFlipStatus={forceFlipStatus}
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
        let iCheckL = i - 1 >= 0;
        let jCheckL = j - 1 >= 0;
        let iCheckH = i + 1 < tiles.length;
        let jCheckH = j + 1 < tiles[i].length;

        if (iCheckL && jCheckL) {
          if (tiles[i - 1][j - 1].displayStatus) {
            friendCount += 1;
          }
        }
        if (iCheckL) {
          if (tiles[i - 1][j].displayStatus) {
            friendCount += 1;
          }
        }
        if (iCheckL && jCheckH) {
          if (tiles[i - 1][j + 1].displayStatus) {
            friendCount += 1;
          }
        }
        if (jCheckL) {
          if (tiles[i][j - 1].displayStatus) {
            friendCount += 1;
          }
        }
        if (jCheckH) {
          if (tiles[i][j + 1].displayStatus) {
            friendCount += 1;
          }
        }

        if (iCheckH && jCheckL) {
          if (tiles[i + 1][j - 1].displayStatus) {
            friendCount += 1;
          }
        }
        if (iCheckH) {
          if (tiles[i + 1][j].displayStatus) {
            friendCount += 1;
          }
        }
        if (iCheckH && jCheckH) {
          if (tiles[i + 1][j + 1].displayStatus) {
            friendCount += 1;
          }
        }

        //final decisions
        if (status && (friendCount === 2 || friendCount === 3)) {
          updateNextStatus(i, j, true);
        } else if (!status && friendCount === 3) {
          updateNextStatus(i, j, true);
        } else {
          updateNextStatus(i, j, false);
        }
      }
    }
    updateAllStates();
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

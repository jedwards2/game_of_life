import "./App.css";
import Gameboard from "./components/Gameboard";
import { useState, useEffect } from "react";

function App() {
  let [tiles, setTiles] = useState([]);
  let [height, setHeight] = useState(12);
  let [width, setWidth] = useState(12);

  useEffect(() => {
    let tiles = [];
    for (let i = 0; i < height; i++) {
      tiles.push([]);
      for (let j = 0; j < width; j++) {
        tiles[i].push({ displayStatus: false, nextStatus: false });
      }
    }
    setTiles(tiles);
  }, [height, width]);

  function forceFlipStatus(idx1, idx2) {
    let newState = [...tiles];
    newState[idx1][idx2] = {
      displayStatus: !newState[idx1][idx2].displayStatus,
      nextStatus: !newState[idx1][idx2].nextStatus,
    };
    setTiles(newState);
  }

  function updateNextStatus(idx1, idx2, newVal) {
    let newState = [...tiles];
    if (newVal) {
      newState[idx1][idx2] = {
        nextStatus: true,
      };
    } else {
      newState[idx1][idx2] = {
        nextStatus: false,
      };
    }
    setTiles(newState);
  }

  function updateAllStates() {
    let newState = [...tiles];
    for (let i = 0; i < tiles.length; i++) {
      for (let j = 0; j < tiles[i].length; j++) {
        newState[i][j] = {
          displayStatus: newState[i][j].nextStatus,
          ...newState[i][j],
        };
      }
    }
    setTiles(newState);
  }

  return (
    <div className="App">
      <Gameboard
        tiles={tiles}
        forceFlipStatus={forceFlipStatus}
        updateNextStatus={updateNextStatus}
        updateAllStates={updateAllStates}
      />
    </div>
  );
}

export default App;

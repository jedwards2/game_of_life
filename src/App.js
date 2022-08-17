import "./App.css";
import Gameboard from "./components/Gameboard";
import { useState, useEffect } from "react";

function App() {
  let [tiles, setTiles] = useState([]);
  let [height, setHeight] = useState(10);
  let [width, setWidth] = useState(10);

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

  function flipStatus(idx1, idx2) {
    let newState = [...tiles];
    newState[idx1][idx2] = {
      displayStatus: !newState[idx1][idx2].displayStatus,
      nextStatus: !newState[idx1][idx2].nextStatus,
    };
    setTiles(newState);
  }

  return (
    <div className="App">
      <Gameboard tiles={tiles} flipStatus={flipStatus} />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Pixel from "./components/Pixel";

function App() {
  const [width, setWidth] = useState("30px");
  const [height, setHeight] = useState("30px");
  const [maxWidth, setMaxWidth] = useState(1);
  const [size, setSize] = useState([]);
  const [number, setNumber] = useState(5);
  const [oldNumber, setOldNumber] = useState(0);
  const [allPixels, setAllPixels] = useState([])

  useEffect(() => {
    for (let i = 0; i < oldNumber * oldNumber; i++) {
      size.pop();
    }
  }, [oldNumber]);

  useEffect(() => {
    setOldNumber(number * number)
    for (let i = 0; i < number * number; i++) {
      size.push({id: i, color: "white"});
    }
    setMaxWidth(parseInt(width) * number + number + 20);
  }, [number]);

  useEffect(() => {
    console.log(allPixels);
    setAllPixels(size);
  }, [size]);

  return (
    <div className="App">
      <Navbar number={number} setNumber={setNumber} />

      <div className="canvas">
        <div
          className="canvas__container"
          style={{ width: `${maxWidth + 1}px` }}
        >
          {allPixels.length > 0 &&
            allPixels.map((item) => (
              <Pixel id={item.id} width={width} height={height} color={item.color} array={allPixels} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;

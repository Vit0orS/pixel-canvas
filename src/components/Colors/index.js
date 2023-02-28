import "./style.css";

function Colors({ handleClose, id, array, setAllPixels }) {
  const colors = [
    "red",
    "green",
    "blue",
    "white",
    "yellow",
    "orange",
    "pink",
    "black",
  ];

  function changeColor(color) {
    let arrayCopy = array;
    
    for(let i=0; i<arrayCopy.length; i++) {
        if(arrayCopy[i].id === id) {
            arrayCopy[i].color = color;
        }
    }

    setAllPixels(arrayCopy);
  }

  return (
    <div className="colors__container">
      {colors.map((color) => (
        <div
          onClick={() => {
            changeColor(color);
            handleClose();
          }}
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: color,
            border: "1px solid black",
            padding: "5px",
          }}
        ></div>
      ))}
    </div>
  );
}

export default Colors;

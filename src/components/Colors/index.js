import "./style.css";

function Colors({ handleClose, id, array }) {
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
    console.log(array)
    for(let i=0; i<array.length; i++) {
        if(array[i].id === id) {
            array[i].color = color;
        }
    }
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

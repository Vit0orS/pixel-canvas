import { useEffect, useState } from "react";
import Pixel from "../../components/Pixel";
import { setCookie, getCookie } from "../../Cookies";
import "./style.css";
import { CSSTransition } from "react-transition-group";
import { Dialog, DialogContent, Button, useTheme, TextField, Box, FormControl } from '@mui/material';
import { ColorPicker } from '@mui/material';

function createArrayOfObjects(size) {
  const arr = [];
  for (let i = 1; i <= size; i++) {
    arr.push({
      id: i,
      color: "white",
    });
  }
  return arr;
}

function ColorPickerModal({ open, onClose, onSelectColor }) {
  const [currentColor, setCurrentColor] = useState('#ffffff');

  const handleClose = () => {
    onClose();
  };

  const handleColorSelect = () => {
    onSelectColor(currentColor);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <TextField
          label="Cor"
          value={currentColor}
          onChange={(event) => setCurrentColor(event.target.value)}
          type="color"
          sx={{ width: '100%' }}
        />
        <Button variant="contained" color="primary" onClick={handleColorSelect} sx={{ mt: 2 }}>
          Selecionar
        </Button>
      </DialogContent>
    </Dialog>
  );
}

function Canvas() {
  const squaresperline = getCookie("squaresperline");
  const [array, setArray] = useState(
    JSON.parse(getCookie("array")).sort((a, b) => a.id - b.id) || [{}]
  );
  const width = getCookie("width");
  const height = getCookie("height");
    const [botaoPressionado, setBotaoPressionado] = useState(false)

  const [colorPickerOpen, setColorPickerOpen] = useState(false);

  const handleColorPickerOpen = () => {
    setColorPickerOpen(true);
  };

  const handleColorPickerClose = () => {
    setColorPickerOpen(false);
  };

  const handleColorSelect = (color) => {
    setCustomColor(color);
    setCurrentColor(color);
  };

  const [customColor, setCustomColor] = useState(getCookie('customColor') || '#fff');
  const colors = [
    'green', 'red', 'blue', 'orange', 'pink', 'black', 'white', 'cyan', 'yellow', 'brown', customColor
  ]
  const [currentColor, setCurrentColor] = useState(colors[0]);

  const [showNotification, setShowNotification] = useState(false);
  useEffect(() => {
    if (window.location.pathname === "/canvas") {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 5000); // Ocultar a notificação após 5 segundos
    }
  }, []);

  function changeColor(color) {
    if(color !== customColor) {
      setCurrentColor(color);
    }
  }

  if (array.length < squaresperline * squaresperline) {
    setArray(createArrayOfObjects(squaresperline * squaresperline));
    setCookie(
      "array",
      JSON.stringify(createArrayOfObjects(squaresperline * squaresperline))
    );
  }

  return (
    <div className="App">
      <ColorPickerModal open={colorPickerOpen} onClose={handleColorPickerClose} onSelectColor={handleColorSelect} />
      {showNotification && (
        <CSSTransition
          in={showNotification}
          timeout={2000}
          classNames="fade"
          unmountOnExit
        >
          <div
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "10px",
              position: "fixed",
              top: "0",
              left: "50%",
              transform: "translateX(-50%)",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
              borderRadius: "4px",
              zIndex: "999",
            }}
          >
            Você pode escolher uma cor rolando a página para baixo
          </div>
        </CSSTransition>
      )}
      <div className="canvas">
        <div
          className="canvas__container"
          style={{
            width: `${width * squaresperline + Number(squaresperline * 2)}px`,
          }}
        >
          {array.length > 0 &&
            array.map((item) => (
              <Pixel
                id={item.id}
                width={width}
                height={height}
                color={item.color}
                currentColor={currentColor}
                array={array}
                setArray={setArray}
                botaoPressionado={botaoPressionado}
                setBotaoPressionado={setBotaoPressionado}
              />
            ))}
        </div>
      </div>

      <div className="colorfooter">
          {
            colors.map((color) => (
              <>
                <div onClick={color === customColor ? () => {handleColorPickerOpen()} : () => { changeColor(color) }} className={`colorDiv ${color === currentColor ? 'color--active' : ''}`} style={{backgroundColor: color}} />
              </>
            ))
          }
      </div>
    </div>
  );
}

export default Canvas;

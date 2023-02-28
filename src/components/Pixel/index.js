import "./style.css";
import * as React from "react";
import { setCookie } from "../../Cookies";

function Pixel({ width, height, color, id, array, setArray, currentColor, botaoPressionado, setBotaoPressionado }) {

  const handleClick = () => {

    const newArray = array.map(obj => {
      if (obj.id === id) {
        return {
          ...obj,
          color: currentColor
        };
      }
      return obj;
    });

    setCookie('array', JSON.stringify(newArray), 365);
    setArray(newArray);
  };

  const mouseSobre = () => {
    if (botaoPressionado) {
      handleClick();
    }
  }

  const botaoPressiona = () => {
    setBotaoPressionado(true);
  }

  const botaoSolta = () => {
    setBotaoPressionado(false);
  }

  return (
    <>
      <div
        onClick={handleClick}
        onMouseEnter={mouseSobre} 
        onMouseDown={botaoPressiona}
        onMouseUp={botaoSolta}
        className="pixel__border"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: `${color}`,
        }}
      ></div>
    </>
  );
}

export default Pixel;

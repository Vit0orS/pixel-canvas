import React from "react";
import { Button, Slider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./style.css";
import { setCookie, getCookie } from "../../Cookies";
import { useNavigate } from 'react-router-dom';

function Home() {
  const [showSliders, setShowSliders] = React.useState(false);
  const [pixelSize, setPixelSize] = React.useState(0);
  const [pixelQty, setPixelQty] = React.useState(0);
  const navigate = useNavigate();

  const handlePixelChange = (event, newValue) => {
    setPixelSize(newValue);
  };

  const handlePixelQty = (event, newValue) => {
    setPixelQty(newValue);
  };

  const handleNewButtonClick = () => {
    setShowSliders(true);
  };

  const handleCreateNew = () => {
    
    setCookie("height", pixelSize, 365);
    setCookie("width", pixelSize, 365);
    setCookie("customColor", "", 365);
    setCookie(
      "array",
      JSON.stringify([]),
      365
    );
    setCookie("squaresperline", pixelQty, 365);
    navigate('/canvas');
  }

  const handleClickContinue = () => {
    navigate('/canvas');
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {showSliders ? (
        <div>
          <Typography variant="h4">Nova Tela</Typography>
          <Typography variant="h6">Largura e Altura de cada pixel: {pixelSize} px</Typography>
          <Slider
            value={pixelSize}
            onChange={handlePixelChange}
            min={0}
            max={100}
            step={1}
          />
          <Typography variant="h6">Quantidade de pixels por linha: {pixelQty}</Typography>
          <Slider
            value={pixelQty}
            onChange={handlePixelQty}
            min={0}
            max={100}
            step={1}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={handleCreateNew}
          >
            Novo
          </Button>
        </div>
      ) : (
        <div
          style={{ display: "flex", columnGap: "10px", alignItems: "center" }}
        >
          <Link className="no-decoration-links">
            <Button
              variant="contained"
              color="primary"
              onClick={handleClickContinue}
            >
              Continuar
            </Button>
          </Link>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleNewButtonClick}
          >
            Novo
          </Button>
        </div>
      )}
    </div>
  );
}

export default Home;

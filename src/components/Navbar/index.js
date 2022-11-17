import { AppBar, Toolbar, Typography } from "@mui/material";
import TemporaryDrawer from "../Drawer";
import "./style.css";

function Navbar({number, setNumber}) {
  return (
    <AppBar className="navbar__color" position="static">
      <Toolbar className="navbar__container" variant="dense">
        <Typography variant="h6" color="inherit" component="div">
          PixelCanvas
        </Typography>
        <Typography
          className="flex--end"
          variant="h6"
          color="inherit"
          component="div"
        >
          <TemporaryDrawer number={number} setNumber={setNumber} className="settings">Settings</TemporaryDrawer>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

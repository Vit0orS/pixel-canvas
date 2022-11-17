import "./style.css";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
import Colors from "../Colors";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

function Pixel({ width, height, color, id, array }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log(array);

  return (
    <>
      <div
      onClick={handleClickOpen}
        className="pixel__border"
        style={{
          width: `${width}`,
          height: `${height}`,
          backgroundColor: `${color}`,
        }}
      ></div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Choose a color:
        </DialogTitle>
        <DialogContent>
          <Colors id={id} array={array} handleClose={handleClose}/>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Pixel;

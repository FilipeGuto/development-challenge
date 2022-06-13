import * as React from "react";
import _ from "lodash";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import "./signature.css";
import { Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 300,
  pt: 4,
  px: 4,
  pb: 3,
};

function ChildModal(props) {
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState();
  const plan = JSON.parse(localStorage.getItem("plan"));

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClear = () => {
    setChecked(<CheckCircleIcon className="check-icon" fontSize="large" />);
    localStorage.removeItem("plan");
    window.location.reload();
  };

  return (
    <>
      <Button
        variant="contained"
        className="btn-close-modal"
        onClick={props.close}
      >
        {props.btnNo}
      </Button>
      {_.isEmpty(plan) ? (
        <Button
          dissabled
        >
          {props.btnConfirm}
        </Button>
      ) : (
        <Button
          variant="contained"
          className="btn-warning"
          onClick={handleOpen}
        >
          {props.btnConfirm}
        </Button>
      )}
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box className="modal-confirm" sx={{ ...style, width: 200 }}>
          <Typography variant="h4" id="child-modal-title">
            {props.btnWarning}
          </Typography>
          <Typography className="plan-value" variant="subtitle1" id="child-modal-description">
            {props.paragraph}
          </Typography>
          <Button
            className="btn btn-close"
            variant="contained"
            onClick={handleClose}
          >
            {props.btnNo}
          </Button>
          <Button
            variant="contained"
            className="btn-warning"
            onClick={() => handleClear()}
          >
            {props.btnYesClear}
          </Button>
          {checked}
        </Box>
      </Modal>
    </>
  );
}

export default function Signature(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className="btn-signature" onClick={handleOpen}>
        {props.title}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className="modal" sx={{ ...style, width: 400 }}>
          <Typography
            className="modal-title"
            variant="h5"
            id="parent-modal-title"
          >
            {props.subtitle}
          </Typography>
          <Typography className="modal-subtitle" variant="subtitle1">
            {props.text}
          </Typography>
          <ChildModal
            user={props.user}
            btnConfirm={props.btnConfirm}
            btnWarning={props.btnWarning}
            btnNo={props.btnNo}
            paragraph={props.paragraph}
            btnYesClear={props.btnYesClear}
            close={handleClose}
          />
        </Box>
      </Modal>
    </div>
  );
}

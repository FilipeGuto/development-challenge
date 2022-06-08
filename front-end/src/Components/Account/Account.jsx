import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { deleteUserById } from '../../Services/users';
import { useNavigate } from "react-router-dom";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal(props) {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async(user) => {
    const teste = await deleteUserById(user);

    if(teste.message) {
      localStorage.clear();
      navigate("/");
    }
  }

  return (
    <React.Fragment>
      <Button
      color="warning"
      onClick={handleOpen}
      >
        {props.btnConfirm}
      </Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">{props.btnWarning}</h2>
          <p id="child-modal-description">
          {props.paragraph}
          </p>
          <Button onClick={handleClose}>{props.btnNo}</Button>
          <Button onClick={() => handleDelete(props.user)}>{props.btnYesDelete}</Button>
          {/* <Button onClick={() => handle()}>{props.btnYes}</Button> */}
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function Account(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>{props.title}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">{props.subtitle}</h2>
          <p id="parent-modal-description">
            {props.text}
          </p>
          <ChildModal
          user={props.user}
          btnConfirm={props.btnConfirm}
          btnWarning={props.btnWarning}
          btnYesDelete={props.btnYesDelete}
          btnNo={props.btnNo}
          paragraph={props.paragraph}
          />
        </Box>
      </Modal>
    </div>
  );
}

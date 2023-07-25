import { useNavigate } from "react-router-dom";

import classes from "./Modal.module.css";

function Modal({ children }) {
  const navigate = useNavigate();

  //뒤로가기
  function closeHandler() {
    navigate("..");
  }

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;

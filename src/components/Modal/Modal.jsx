import "./Modal.css";
import { useState } from "react";
import LoginForm from "../LoginForm";
import Registration from "../Registration";
import { Link } from "react-router-dom"

const Modal = () => {
  const [modal, setModal] = useState(false);
  const [loginActive, setLoginActive] = useState(true)

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Login
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            {loginActive && <Link to="/registration"><LoginForm setLoginActive={setLoginActive} /></Link>}
            {!loginActive && <Link to="/login"><Registration setLoginActive={setLoginActive} /></Link>}
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

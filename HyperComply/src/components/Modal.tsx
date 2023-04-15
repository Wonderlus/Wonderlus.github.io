import { useContext, useRef } from "react";
import { ModalContext } from "../context/ModalContext";
import "./styles/Modal.scss";
import ModalLogin from "./ModalLogin";
import ModalReg from "./ModalReg";
import { CSSTransition, Transition } from "react-transition-group";
const Modal = ({modalWindow} : {modalWindow: string}) => {
    
    const {modal, open, close} = useContext(ModalContext);

    return (
        <CSSTransition in={modal} timeout={200} classNames="modal" unmountOnExit>
            <>
                <div className={`modal`} onClick={close}> 
                </div> 
                {modalWindow == "login" ? <ModalLogin/> : <ModalReg/>}
            </>
        </CSSTransition>
        
     );
}
 
export default Modal;

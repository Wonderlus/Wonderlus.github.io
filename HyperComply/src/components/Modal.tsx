import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import styles from "./styles/Modal.module.scss";
import ModalLogin from "./ModalLogin";
import ModalReg from "./ModalReg";

const Modal = ({modalWindow} : {modalWindow: string}) => {
    
    const {modal, open, close} = useContext(ModalContext);
    return (
        <>
            <div className={styles.modal} onClick={close}></div>
            {modalWindow == "login" ? <ModalLogin/> : <ModalReg/>}
        </>
        
     );
}
 
export default Modal;
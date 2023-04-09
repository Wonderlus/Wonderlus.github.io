import styles from "./styles/Header.module.scss";
import "./styles/Modal.module.scss";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ModalContext, IModalContext } from "../context/ModalContext";
import Modal from "./Modal";
import { CSSTransition } from "react-transition-group";


const Header = () => {
    
    const [modalWindow, setModalWindow] = useState("")
    const {modal, open, close} = useContext(ModalContext)
    


    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerInner}>
                    <nav className={styles.nav}>
                        <Link className={styles.link} to="">Product</Link>
                        <Link className={styles.link} to="">Pricing</Link>
                        <Link className={styles.link} to="">Company</Link>
                        <Link className={styles.link} to="about">Learn More</Link> 
                    </nav>
                    <div className={styles.buttons}>
                        <button className="button" onClick={
                            () => {
                                   setModalWindow("login"); 
                                   open();
                                  }
                            }>Sign in</button>
                        <button className="button big" onClick={
                            () => {
                                setModalWindow("reg");
                                open();
                        }}>Get Started</button>
                    </div>
                </div>
            </header>
                
            
            <CSSTransition addEndListener={(node: HTMLElement, done: () => void) => {
                node.addEventListener("transitionend", done, false);
            }}
            in={modal}
            timeout={500}
            classNames="modal">
                <div>
                    {modal && <Modal modalWindow={modalWindow}/>}
                </div>
            </CSSTransition>
        </>
        
     );
}
 
export default Header;
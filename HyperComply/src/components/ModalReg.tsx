import { CSSTransition } from "react-transition-group";
import "./styles/ModalLogin.scss"
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

const ModalReg = () => {
    const {modal, close} = useContext(ModalContext);

    return (
        <CSSTransition in={modal} timeout={750} classNames="modalInner" appear={true}>
            <div className={"modalInner"}>
            <h3>Registration</h3>
            <form action="" className={"modalForm"}>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Repeat password" />
                <input onClick={(event) => {
                    event.preventDefault();
                    close();
                }} type="submit" value="Registrate"/>
            </form>
        </div>
        </CSSTransition>
        
     );
}
 
export default ModalReg;
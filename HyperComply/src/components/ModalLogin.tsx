import { useContext, useRef } from "react";
import "./styles/ModalLogin.scss";
import { ModalContext } from "../context/ModalContext";
import { CSSTransition } from "react-transition-group";

const ModalLogin = () => {
    const {modal, close} = useContext(ModalContext);
    
    return (
        <CSSTransition in={modal} timeout={750} classNames="modalInner" appear={true}>
            <div  className={"modalInner"}>
                <h3>Log In</h3>
                <form action="" className={"modalForm"}>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password"/>
                    <input onClick={(event) => {
                        event.preventDefault();
                        close();
                    }} type="submit" value="Log In"/>
                </form>
            </div>
        </CSSTransition>
        
     );
}
 
export default ModalLogin;
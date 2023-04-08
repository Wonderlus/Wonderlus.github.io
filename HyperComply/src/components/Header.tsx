import styles from "./styles/Header.module.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

const Header = () => {
    

    return ( 
        <header className={styles.header}>
            <div className={styles.headerInner}>
                <nav className={styles.nav}>
                    <Link className={styles.link} to="">Product</Link>
                    <Link className={styles.link} to="">Pricing</Link>
                    <Link className={styles.link} to="">Company</Link>
                    <Link className={styles.link} to="about">Learn More</Link>
                </nav>
                <div className={styles.buttons}>
                    <button className="button">Sign in</button>
                    <button className="button big">Get Started</button>
                </div>
            </div>
        </header>
     );
}
 
export default Header;
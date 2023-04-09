import styles from "./styles/ModalLogin.module.scss"

const ModalLogin = () => {
    return ( 
        <div className={styles.modalInner}>
            <h3>Log In</h3>
            <form action="" className={styles.modalForm}>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password"/>
                <input type="submit" value="Log In"/>
            </form>
        </div>
     );
}
 
export default ModalLogin;
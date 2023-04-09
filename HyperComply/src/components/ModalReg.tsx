import styles from "./styles/ModalLogin.module.scss"

const ModalReg = () => {
    return ( 
        <div className={styles.modalInner}>
            <h3>Registration</h3>
            <form action="" className={styles.modalForm}>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Repeat password" />
                <input type="submit" value="Registrate"/>
            </form>
        </div>
     );
}
 
export default ModalReg;
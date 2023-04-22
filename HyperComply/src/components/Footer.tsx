import styles from "./styles/Footer.module.scss";


const Footer = () => {
    return ( 
        <footer className={styles.main}>
            
            <div className={styles.inner}>
                <img className={styles.logo} src="src/assets/img/footer/logo.svg" />
                <div className={styles.column}>
                    <h4 className={styles.title}>Legal</h4>
                    <h6 className={styles.text}>Privacy Policy</h6>
                </div>
                <div className={styles.column}>
                    <h4 className={styles.title}>Contact</h4>
                    <h6 className={styles.text}>Email us</h6>
                    <h6 className={styles.text}>Support</h6>
                </div>
                <div className={styles.column}>
                    <h4 className={styles.title}>About</h4>
                    <h6 className={styles.text}>Company</h6>
                    <div className={styles.links}>
                        <img className={styles.svg} src="src/assets/img/footer/Twitter.svg" />
                        <img className={styles.svg} src="src/assets/img/footer/Linkedin.svg" />
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;
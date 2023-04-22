import styles from "./styles/Efficiency.module.scss"

const Efficiency = () => {
    return ( 
        <div className={styles.main}>
            <img className={styles.img} src="src/assets/img/Efficiency.png" />
            <div className={styles.title}>Everything you need to get security reviews done fast and done right</div>
            <button className="button big">Get started</button>
        </div>
     );
}
 
export default Efficiency;
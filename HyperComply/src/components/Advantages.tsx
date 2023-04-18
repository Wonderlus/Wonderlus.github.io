import styles from "./styles/Stats.module.scss";


const Advantages = () => {
    return ( 
        <div className={styles.stats}>
            <div>
                <h3 className={styles.subtitle}>For Procurement teams who care about security</h3>
                <h1 className={styles.title}>Easy vendor reviews</h1>
                <p className={styles.text}>HyperComply makes it easy to send security questionnaires to new vendors and monitor your network of tools over time.</p>
                <button className="button big">Learn More</button>
            </div>

            <div className={styles.statsMain}>
                <div className={styles.statsOpportunities}>
                    <div className={styles.statsOpportunity}>Find and fill security gaps</div>
                    <div className={styles.statsOpportunity}>Streamline your procurement processes</div>
                    <div className={styles.statsOpportunity}>Never start from scratch</div>
                </div>
                <picture>
                    <div className={styles.advantagesInfo}>
                        <p>Review Advanta Inc. questionnaire</p>
                        <button className="button big">Review & approve</button>
                    </div>
                    <img className={styles.advantagesImg}  src="src\assets\img\advantages\1.png" alt="Advanta Inc" />
                </picture>
                    
            </div>
        </div>
     );
}
 
export default Advantages;
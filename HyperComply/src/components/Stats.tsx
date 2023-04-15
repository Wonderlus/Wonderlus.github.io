import styles from "./styles/Stats.module.scss";


const Stats = () => {
    return ( 
        <div className={styles.stats}>
            <div>
                <h3 className={styles.subtitle}>For Sales teams at startup companies</h3>
                <h1 className={styles.title}>Close deals faster</h1>
                <p className={styles.text}>Don't let security reviews slow you down. We make sure you respond to security questionnaires in 1 day, guaranteed.</p>
                <button className="button big">Learn More</button>
            </div>

            <div className={styles.statsMain}>
                <div className={styles.statsOpportunities}>
                    <div className={styles.statsOpportunity}>Automation + human review</div>
                    <div className={styles.statsOpportunity}>Always learning</div>
                    <div className={styles.statsOpportunity}>Simple and flexible</div>
                </div>
                
                    <img src="src\assets\img\Stats.png" alt="91% of your questionnaire has been autofilled" />
            </div>
        </div>
     );
}
 
export default Stats;
import styles from "./styles/Intro.module.scss";


const Intro = () => {
    return ( 
        <div className={styles.intro}>
            <div className={styles.introInner}>
                <div className={styles.describe}>
                    <h1 className={styles.title}>Security reviews, solved</h1>
                    <p className={styles.text}>Using AI and a team of experts, HyperComply automates security reviews and accelerates due diligence, so you can onboard new tools and partners with confidence.</p>
                    <button className="button big">Get a Demo</button>
                </div>
                <img src="src\assets\img\Intro.png" alt="Main page" className={styles.img}/>
                <div className={styles.footerText}>
                    <p>We've saved 10,000+ hours for the smartest businesses in the world.</p>
                <div className="">
                    
                </div>

            </div>

            </div>
            
        </div>
     );
}
 
export default Intro;
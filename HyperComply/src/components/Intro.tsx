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
                    <p>We've saved 10,000+ hours<br/> for the smartest businesses<br/> in the world.</p>
                </div>
                <div className={styles.companyImgs}>
                    <img src="src\assets\img\companies\1.png" alt="Vidyard" />
                    <img src="src\assets\img\companies\1.png" alt="Vidyard" />
                    <img src="src\assets\img\companies\1.png" alt="Vidyard" />
                    <img src="src\assets\img\companies\1.png" alt="Vidyard" />
                    <img src="src\assets\img\companies\1.png" alt="Vidyard" />
                    <img src="src\assets\img\companies\1.png" alt="Vidyard" />
                </div>

            </div>

            
        </div>
     );
}
 
export default Intro;
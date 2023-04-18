import styles from "./styles/TeamSlide.module.scss"
import "./styles/TemaSlide.scss"

const TeamSlide = ({ active } : { active: string }) => {
    return ( 
        <div className={`${styles.main} ${active}`}>
            <img className={styles.logo} src="src/assets/img/CompanyLogo.png" alt="smarsh" />
            <p className={styles.text}>“HyperComply has enabled us to complete questionnaires quickly and accurately, and has had a hugely positive effect on speeding up our sales cycle.”</p>
            <div className={styles.personBlock}>
                <img className={styles.person} src="src/assets/img/Team1.png"   alt="person" />
                <p className={styles.name}>Desiree R, Sr. Director of Information Security</p>
            </div>
            
        </div>
     );
}
 
export default TeamSlide;
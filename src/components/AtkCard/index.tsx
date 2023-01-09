import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceD20, faCrosshairs, faExplosion } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";

export default function AtkCard() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardTitle}>
        <h1>H&K UMP-45</h1>
        <h1>B</h1>
      </div>
      <img className={styles.cardImage} src="/assets/images/smg.png"></img>
      <div className={styles.cardData}> 
        <h1><FontAwesomeIcon icon={faDiceD20} /> 4d20+5</h1>
        <h1><FontAwesomeIcon icon={faCrosshairs} /> 3d6</h1>
        <h1><FontAwesomeIcon icon={faExplosion} /> 17/3X</h1>    
      </div>
    </div>
  );
}
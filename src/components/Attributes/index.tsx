import styles from "./styles.module.css";

export default function Attributes() {
  return (
    <div className={styles.attributeContainer}>
      <img className={styles.attributeChart} src="/assets/images/attributes.png" />
      <div className={styles.valuesContainer}>
        <div className={styles.attributeValuesRow1}>
          <div className={styles.agi}>6</div>
        </div>
        <div className={styles.attributeValuesRow2}>
          <div className={styles.forInt}>2</div>
          <div className={styles.forInt}>3</div>
        </div>
        <div className={styles.attributeValuesRow3}>
          <div className={styles.preVig}>4</div>
          <div className={styles.preVig}>5</div>
        </div>
      </div>
    </div>
  );
}

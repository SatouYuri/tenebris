import "./styles.css"
import attributeChart from "../../assets/images/attributes.png";

export default function Attributes() {
  return (
    <div className="attributeContainer">
      <img className="attributeChart" src={attributeChart} />
      <div className="valuesContainer">
        <div className="attributeValuesRow1">
          <div className="agi">6</div>
        </div>
        <div className="attributeValuesRow2">
          <div className="forInt">2</div>
          <div className="forInt">3</div>
        </div>
        <div className="attributeValuesRow3">
          <div className="preVig">4</div>
          <div className="preVig">5</div>
        </div>
      </div>
    </div>
  );
}

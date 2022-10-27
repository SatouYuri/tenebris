import "./styles.css"
import atkImage from "../../assets/images/sniper.png";


export default function AtkCard() {
  return (
    <div className="cardContainer">
      <div className="cardTitle">
        <h1>FUZIL DE PRECISÃO</h1>
        <h1>B</h1>
      </div>
      <img className="cardImage" src={atkImage}></img>
      <div className="cardData"> 
        <h1>0D20+00</h1>
        <h1>00D00+00</h1>
        <h1>00/0X</h1>      
      </div>
    </div>
  );
}
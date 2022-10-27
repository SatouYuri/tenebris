import "./styles.css"
import Attributes from "../Attributes";
import CountBar from "../CountBar";
import AtkCard from "../AtkCard";

export default function Sheet() {
  return (
    <div className="sheetContainer">
      <h1 className="charName">ISAAC NICARELLI DOS SANTOS SILVA</h1>
      <Attributes />
      <CountBar countVal={32} color="red"/>
      <CountBar countVal={32} color="blue"/>
      <CountBar countVal={32} color="yellow"/>
      <AtkCard />
    </div>
  );
}

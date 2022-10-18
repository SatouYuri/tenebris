import "./styles.css"
import Attributes from "../Attributes";
import CountBar from "../CountBar";

export default function Sheet() {
  return (
    <div className="sheetContainer">
      <h1 className="charName">ISAAC NICARELLI DOS SANTOS SILVA</h1>
      <Attributes />
      <CountBar />
      <CountBar />
      <CountBar />
    </div>
  );
}

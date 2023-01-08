import "./styles.css"

import Attributes from "../Attributes";
import CountBar from "../CountBar";
import AtkList from "../AtkList";

import { SheetAPI } from "../../services/SheetAPI";

export default function Sheet() {
  const { getAllSheets } = SheetAPI();

  const teste = async () => {
    const jeej = await getAllSheets();
    console.log(jeej);
  }

  teste();

  return (
    <div className="sheetContainer">
      <h1 className="charName">ISAAC NICARELLI DOS SANTOS SILVA</h1>
      <Attributes />
      <CountBar countVal={24} maxCountVal={32} color="red"/>
      <CountBar countVal={20} maxCountVal={32} color="blue"/>
      <CountBar countVal={16} maxCountVal={32} color="yellow"/>
      <AtkList />
    </div>
  );
}

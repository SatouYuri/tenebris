import "./styles.css"
import Attributes from "../Attributes";
import CountBar from "../CountBar";
import AtkList from "../AtkList";
import React, { useEffect, useState } from "react";

export default function Sheet() {
  const [settingMax, setSettingMax] = useState<boolean>(Boolean(localStorage.getItem("Sheet@Main_settingMax")) || false);

  return (
    <div className="sheetContainer">
      <h1 className="charName">Ossos ao Mar</h1>
      <img className="bonesPromoImage" src="https://images.fineartamerica.com/images-medium-large-5/haunted-beach-mihai-florea.jpg"></img>
      {/* <Attributes /> */}
      <CountBar id="Health" countVal={24} maxCountVal={32} color={settingMax ? "edit" : "red"} settingMax={settingMax} />
      <CountBar id="Sanity" countVal={20} maxCountVal={32} color={settingMax ? "edit" : "blue"} settingMax={settingMax} />
      <CountBar id="Stamina" countVal={16} maxCountVal={32} color={settingMax ? "edit" : "yellow"} settingMax={settingMax} />
      <button className="editMax" onClick={() => setSettingMax(!settingMax)}>Alterar Máximos</button> 
      {/* <AtkList /> */}
    </div>
  );
}

import "./styles.css"
import Attributes from "../Attributes";
import CountBar from "../CountBar";
import AtkList from "../AtkList";
import React, { useEffect, useState } from "react";

export default function Sheet() {
  const [editing, setEditing] = useState<boolean>(Boolean(localStorage.getItem("Sheet@Main_editing")) || false);

  return (
    <div className="sheetContainer">
      <h4 className="charName"><i>O Brilho de Cristalina - Capítulo IV</i></h4>
      <h1 className="charName2">O Lampejo do Abismo</h1>
      <Attributes editing={editing} />
      <CountBar id="Health" countVal={24} maxCountVal={32} color={editing ? "edit" : "red"} editing={editing} />
      <CountBar id="Sanity" countVal={20} maxCountVal={32} color={editing ? "edit" : "blue"} editing={editing} />
      <CountBar id="Stamina" countVal={16} maxCountVal={32} color={editing ? "edit" : "yellow"} editing={editing} />
      <button className="editMax" onClick={() => setEditing(!editing)}>Editar</button> 
      {/* <AtkList /> */}
    </div>
  );
}

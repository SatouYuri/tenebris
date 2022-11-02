import "./styles.css"
import attributeChart from "../../assets/images/attributes.png";
import React, { useEffect, useState } from "react";

type AttributesProps = {
  editing?: boolean;
}; 

const Attributes = ({ editing }: AttributesProps) => {
  const [agi, setAgi] = useState<number>(Number(localStorage.getItem("Attributes@Main_agi")));
  const [forc, setForc] = useState<number>(Number(localStorage.getItem("Attributes@Main_forc")));
  const [int, setInt] = useState<number>(Number(localStorage.getItem("Attributes@Main_int")));
  const [pre, setPre] = useState<number>(Number(localStorage.getItem("Attributes@Main_pre")));
  const [vig, setVig] = useState<number>(Number(localStorage.getItem("Attributes@Main_vig")));

  const increment = (attr: string) => {
    if(editing){
      let newAttrVal = eval(attr) + 1;
      if(newAttrVal > 6){
        newAttrVal = 0;
      }
      eval(`set${attr[0].toUpperCase() + attr.slice(1)}(${newAttrVal})`);
      localStorage.setItem(`Attributes@Main_${attr}`, JSON.stringify(newAttrVal));
    }
  };

  return (
    <div className="attributeContainer">
      <img className="attributeChart" src={attributeChart} />
      <div className="valuesContainer">
        <div className="attributeValuesRow1">
          <div className="agi" onClick={() => increment("agi")}>{agi}</div>
        </div>
        <div className="attributeValuesRow2">
          <div className="forInt" onClick={() => increment("forc")}>{forc}</div>
          <div className="forInt" onClick={() => increment("int")}>{int}</div>
        </div>
        <div className="attributeValuesRow3">
          <div className="preVig" onClick={() => increment("pre")}>{pre}</div>
          <div className="preVig" onClick={() => increment("vig")}>{vig}</div>
        </div>
      </div>
    </div>
  );
}

export default Attributes;
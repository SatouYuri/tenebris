import React, { Component, useEffect, useState } from "react";
import "./styles.css"

type CountBarProps = {
  countVal: number;
  color?: string;
}; 

const CountBar = ({ countVal, color }: CountBarProps) => {
  const [count, setCount] = useState<number>(countVal);

  const increment = (amount: number) => {
    const newCountVal = count + amount;
    if(amount > 0 || (amount < 0 && newCountVal >= 0)){
      setCount(newCountVal);
    }
  };

  const getColor = () => {
    if(color === "red"){
      const countBarStyle: React.CSSProperties = {
        'backgroundColor': 'rgba(140, 0, 0, 0.8)',
      }
      return countBarStyle;
    }else if(color === "blue"){
      const countBarStyle: React.CSSProperties = {
        'backgroundColor': 'rgba(0, 0, 140, 0.8)',
      }
      return countBarStyle;
    }else if(color === "yellow"){
      const countBarStyle: React.CSSProperties = {
        'backgroundColor': 'rgba(140, 140, 0, 0.8)',
      }
      return countBarStyle;
    }
  };

  return (
    <div className="countBar">
      <button className="countButton" onClick={() => increment(-1)}>-</button>
      <div className="countBackground">
        <div className="countFront">
          <div className="countFrontColor" style={getColor()} />
        </div>
      </div>
      <p className="counter">{count}/{countVal}</p>
      <button className="countButton" onClick={() => increment(1)}>+</button>
    </div>
  );
}

export default CountBar;
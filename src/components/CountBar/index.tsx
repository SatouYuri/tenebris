import React, { useEffect, useState } from "react";
import "./styles.css"

type CountBarProps = {
  id: string;
  countVal: number;
  maxCountVal: number;
  color?: string;
  editing?: boolean;
}; 

const CountBar = ({ id, countVal, maxCountVal, color, editing }: CountBarProps) => {
  const [countBarId] = useState(`CountBar@${id}`);
  const [count, setCount] = useState<number>(Number(localStorage.getItem(`${countBarId}_count`)) || countVal);
  const [maxCount, setMaxCount] = useState<number>(Number(localStorage.getItem(`${countBarId}_maxCount`)) || maxCountVal); //Remover mais tarde...

  const increment = (amount: number) => {
    const newCountVal = count + amount;
    if(amount > 0 || (amount < 0 && newCountVal >= 0)){
      setCount(newCountVal);
      localStorage.setItem(`${countBarId}_count`, JSON.stringify(newCountVal));
    }
  };

  //Remover mais tarde...
  const incrementMax = (amount: number) => {
    const newCountVal = maxCount + amount;
    if(amount > 0 || (amount < 0 && newCountVal >= 0)){
      setMaxCount(newCountVal);
      localStorage.setItem(`${countBarId}_maxCount`, JSON.stringify(newCountVal));
    }
  };

  const getBarProgressStyle = () => {
    const barProgressStyle: React.CSSProperties = {
      'width': (100 * count/maxCount).toString() + '%',
    }
    return barProgressStyle;
  }

  const getBarColorStyle = () => {
    if(color === "red"){
      const countBarStyle: React.CSSProperties = {
        'backgroundColor': 'rgba(140, 0, 0, 0.8)',
      }
      return countBarStyle;
    }else if(color === "blue"){
      const countBarStyle: React.CSSProperties = {
        'backgroundColor': 'rgba(0, 0, 180, 0.8)',
      }
      return countBarStyle;
    }else if(color === "yellow"){
      const countBarStyle: React.CSSProperties = {
        'backgroundColor': 'rgba(140, 140, 0, 0.8)',
      }
      return countBarStyle;
    }else if(color === "edit"){
      const countBarStyle: React.CSSProperties = {
        'backgroundColor': 'rgba(0, 240, 240, 0.8)',
      }
      return countBarStyle;
    }
  };

  return (
    <div className="countBar">
      <button className="countButton" onClick={() => {editing ? incrementMax(-1) : increment(-1)}}>-</button>
      <div className="countBackground">
        <div className="countFront" style={getBarProgressStyle()}>
          <div className="countFrontColor" style={getBarColorStyle()} />
        </div>
      </div>
      <p className="counter">{count}/{maxCount}</p>
      <button className="countButton" onClick={() => {editing ? incrementMax(1) : increment(1)}}>+</button>
    </div>
  );
}

export default CountBar;
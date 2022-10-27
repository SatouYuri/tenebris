import React, { useEffect, useState } from "react";
import "./styles.css"

type CountBarProps = {
  countVal: number;
  maxCountVal: number;
  color?: string;
}; 

const CountBar = ({ countVal, maxCountVal, color }: CountBarProps) => {
  const [count, setCount] = useState<number>(countVal);

  const increment = (amount: number) => {
    const newCountVal = count + amount;
    if(amount > 0 || (amount < 0 && newCountVal >= 0)){
      setCount(newCountVal);
    }
  };

  const getBarProgressStyle = () => {
    const barProgressStyle: React.CSSProperties = {
      'width': (100 * count/maxCountVal).toString() + '%',
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
        <div className="countFront" style={getBarProgressStyle()}>
          <div className="countFrontColor" style={getBarColorStyle()} />
        </div>
      </div>
      <p className="counter">{count}/{maxCountVal}</p>
      <button className="countButton" onClick={() => increment(1)}>+</button>
    </div>
  );
}

export default CountBar;
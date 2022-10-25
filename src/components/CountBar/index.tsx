import "./styles.css"

export default function CountBar() {
  return (
    <div className="countBar">
      <button className="countButton">-</button>
      <div className="countBackground">
        <div className="countFront">
          <div className="countFrontColor" />
        </div>
      </div>
      <button className="countButton">+</button>
    </div>
  );
}

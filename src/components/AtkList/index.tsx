import "./styles.css"
import AtkCard from "../AtkCard";
import ReactSwipe from "react-swipe";

export default function AtkList() {
  let reactSwipeEl;
  return (
    <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
    >
    <div><AtkCard /></div>
    <div><AtkCard /></div>
    <div><AtkCard /></div>
    </ReactSwipe>
  );
}
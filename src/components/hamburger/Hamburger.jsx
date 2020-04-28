import React from "react";
import "./Hamburger.scss";
export default function Hamburger(props) {
  return (
    <div className="hamburger" onClick={props.toggleNav}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

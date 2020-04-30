import React from "react";
import "./Input.css";
import { Link } from "react-router-dom";
export default function Input(props) {
  let element = "";
  switch (props.element) {
    case "input":
      element = <input {...props.config}></input>;
      break;
    case "select":
      element = <select {...props.config}></select>;
      break;
    case "text-area":
      element = <textarea {...props.config}></textarea>;
      break;
    default:
      element = <Link {...props.config}>{props.link}</Link>;
      break;
  }
  return (
    <div className="group-input">
      {props.label && <label>{props.label}</label>} {element}
    </div>
  );
}

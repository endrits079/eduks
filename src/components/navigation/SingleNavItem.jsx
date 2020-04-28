import React from "react";
import "./SingleNavItem.scss";
import { NavLink } from "react-router-dom";
export default function SingleNavItem(props) {
  return (
    <li className="single-nav-item">
      <NavLink to={props.route} exact>
        {props.children}
      </NavLink>
    </li>
  );
}

import React from "react";
import SingleNavItem from "./SingleNavItem";
import "./Navbar.css";
const menus = [
  { route: "/", label: "home" },
  { route: "aboutus", label: "about us" },
  { route: "contactus", label: "contact us" },
  { route: "login", label: "login" },
  { route: "register", label: "register" },
];
export default function Navbar(props) {
  let classes = [];
  props.mobile ? classes.push("nav-mobile") : classes.push("nav");
  props.hide && classes.push("hide");
  return (
    <nav className={classes.join(" ")}>
      <ul>
        {menus.map((menu) => {
          return (
            <SingleNavItem key={menu.label} route={menu.route}>
              {menu.label}
            </SingleNavItem>
          );
        })}
      </ul>
    </nav>
  );
}

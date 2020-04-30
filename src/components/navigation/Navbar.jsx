import React from "react";
import SingleNavItem from "./SingleNavItem";
import "./Navbar.css";
import { connect } from "react-redux";
import * as actionTypes from "../../store/reducers/actions";
function Navbar(props) {
  let classes = [];
  const menus = [
    { route: "/", label: "home" },
    { route: "aboutus", label: "about us" },
    { route: "contactus", label: "contact us" },
    {
      route: "login",
      label: "login",
      click: () => {
        props.toggleModal(true);
      },
    },
    {
      route: "register",
      label: "register",
      click: () => {
        props.toggleModal(true);
      },
    },
  ];
  props.mobile ? classes.push("nav-mobile") : classes.push("nav");
  props.hide && classes.push("hide");
  return (
    <nav className={classes.join(" ")}>
      <ul>
        {menus.map((menu) => {
          return (
            <SingleNavItem key={menu.label} click={menu.click} route={menu.route}>
              {menu.label}
            </SingleNavItem>
          );
        })}
      </ul>
    </nav>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: (showModal) => dispatch({ type: actionTypes.SHOW_MODAL, showModal }),
  };
};
export default connect(null, mapDispatchToProps)(Navbar);

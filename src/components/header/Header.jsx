import React, { Component } from "react";
import "./Header.scss";
import Navbar from "../navigation/Navbar";
import Logo from "../logo/Logo";
import Hamburger from "../hamburger/Hamburger";
class Header extends Component {
  render() {
    return (
      <header className="header">
        <Logo></Logo>
        <Hamburger toggleNav={this.props.toggleNav}></Hamburger>
        <Navbar></Navbar>
      </header>
    );
  }
}

export default Header;

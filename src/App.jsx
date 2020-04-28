import React, { Component } from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navigation/Navbar";
import Banner from "./components/banner/Banner";
import "./App.css";
export default class App extends Component {
  state = {
    showNav: false,
  };
  toggleNav = () => {
    this.setState((prevState, prevProps) => {
      return {
        showNav: !prevState.showNav,
      };
    });
  };
  render() {
    return (
      <div className="app">
        <Header toggleNav={this.toggleNav}></Header>
        <Navbar mobile hide={!this.state.showNav}></Navbar>
        <section className={`container ${!this.state.showNav && "hide"}`}>
          <Banner></Banner>
        </section>
      </div>
    );
  }
}

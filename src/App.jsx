import React, { Component } from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navigation/Navbar";
import Banner from "./components/banner/Banner";
import Modal from "./components/modal/Modal";
import { Route } from "react-router-dom";

import "./App.css";
import LoginForm from "./components/form/loginform/LoginForm";
import RegisterForm from "./components/form/registerform/RegisterForm";
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
          <Modal show={this.state.showModal}>
            <Route
              path="/login"
              render={() => {
                return <LoginForm title="login"></LoginForm>;
              }}
            ></Route>
            <Route
              path="/register"
              render={() => {
                return <RegisterForm title="register"></RegisterForm>;
              }}
            ></Route>
          </Modal>
        </section>
      </div>
    );
  }
}

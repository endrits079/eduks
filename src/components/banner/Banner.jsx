import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
export default function Banner(props) {
  return (
    <section className="banner">
      <h1>edu~ks</h1>
      <div className="divider"></div>
      <h3>become a developer</h3>
      <Link to="/">Sign Up</Link>
    </section>
  );
}

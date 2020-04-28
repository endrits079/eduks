import React from "react";
import "./Logo.scss";
import { Link } from "react-router-dom";
export default function Logo(props) {
  return (
    <Link to="/" className="logo">
      <span>edu~</span>ks
    </Link>
  );
}

import React from "react";
import logo from "../../../assets/logo.svg";
import styles from "./Logo.module.scss";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to="/">
        {" "}
        <img src={logo} />
      </Link>
    </div>
  );
};

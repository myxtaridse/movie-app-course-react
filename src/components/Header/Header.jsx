import React from "react";
import { Logo, Navbar, User } from "./index";
import Search from "./Search/Search";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export const Header = ({ search, setSearch, setFetch }) => {
  return (
    <div className={styles.header}>
      <Logo />
      <Navbar />
      <Search search={search} setSearch={setSearch} setFetch={setFetch} />
      <User />
    </div>
  );
};

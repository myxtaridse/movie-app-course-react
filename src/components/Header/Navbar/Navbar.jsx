import React from "react";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <ul className={styles.navbar}>
      <li>Главная</li>
      <li>Телевидение</li>
      <li>Фильмы</li>
      <li>Сериалы</li>
      <li>Мои избранные</li>
    </ul>
  );
};

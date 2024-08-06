import React from "react";
import styles from "./User.module.scss";

export const User = () => {
  return (
    <div className={styles.block}>
      <div className={styles.block__user}></div>
      <div className={styles.block__bell}>+7</div>
    </div>
  );
};

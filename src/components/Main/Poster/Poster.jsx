import React from "react";
import styles from "./Poster.module.scss";
import title1 from "../../../assets/title1.png";
import title2 from "../../../assets/title2.png";
import poster from "../../../assets/poster.png";
export const Poster = () => {
  return (
    <div className={styles.poster}>
      {/* <div className={styles.poster__bg}></div> */}
      <img className={styles.poster__image} src={poster} alt="poster" />
      <div className={styles.poster__title}>
        <img className={styles.poster__title__img1} src={title1} alt="title" />
        <img className={styles.poster__title__img2} src={title2} alt="title" />
        <div className={styles.poster__title__description}>
          фантастика, боевик, комедия, приключения
        </div>
        <div className={styles.poster__title__detalies}>
          <span>136мин</span>
          <span>США</span>
          <span>2023г</span>
        </div>
        <div className={styles.poster__title__btns}>
          <button>Смотреть</button>
          <a>Подробнее о фильме &#9432;</a>
        </div>
      </div>
    </div>
  );
};

import React from "react";

import styles from "./styleCarsCard.module.scss";

const CarsCard = ({
  title,
  description,
  power,
  torque,
  transmission,
  weight,
  wheels,
  acceleration,
}) => {
  return (
    <>
      <div className={styles.cars}>
        <div className={styles.up}>
          <div className={styles.text__section}>
            <h1>{title}</h1>
            <h2>Описание машины</h2>
            <p>{description}</p>
            <h2>Характеристики</h2>
            <ul>
              <li>Л.С: {power}</li>
              <li>Привод: {transmission}</li>
              <li>Шины: {wheels}</li>
              <li>Вес: {weight}</li>
              <li>0-100км/ч: {acceleration}</li>
              <li>Крутящий момент: {torque}</li>
            </ul>
          </div>
          <img src="./img/f1-1384580934.jpg" alt="" />
        </div>
        <div className={styles.line}></div>
        <div className={styles.down}>
          <div className={styles.price}>19999₽</div>
          <div className={styles.status}>Свободно</div>
          <button>Забронировать</button>
        </div>
      </div>
    </>
  );
};

export default CarsCard;

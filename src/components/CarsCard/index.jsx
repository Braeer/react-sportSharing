import React, { useState } from "react";

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
  image,
}) => {
  const [rented, setRented] = useState(false);

  const handleOnrent = () => {
    setRented(!rented);
  };

  return (
    <>
      <div className={styles.cars}>
        <div className={styles.up}>
          <div className={styles.text__section}>
            <h1>{title}</h1>
            <h2>Описание машины</h2>
            <p>{description}</p>
            <h2>Характеристики</h2>
            <ul className={styles.cars_parametrs}>
              <li>Л.С: {power}</li>
              <li>Привод: {transmission}</li>
              <li>Шины: {wheels}</li>
              <li>Вес: {weight}</li>
              <li>0-100км/ч: {acceleration}</li>
              <li>Крутящий момент: {torque}</li>
            </ul>
          </div>
          <img src={image} alt="" />
        </div>
        <div className={styles.line}></div>
        <div className={styles.down}>
          <div className={styles.price}>19999₽</div>
          <div className={styles.status}>Свободно</div>
          <button
            onClick={() => handleOnrent()}
            className={rented ? styles.not_rented : styles.rented}
          >
            Забронировать
          </button>
        </div>
      </div>
    </>
  );
};

export default CarsCard;

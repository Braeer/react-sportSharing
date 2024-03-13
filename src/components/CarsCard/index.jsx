import React from "react";

import styles from "./styleCarsCard.module.scss";

const CarsCard = () => {
  return (
    <>
      <footer className={styles.cars}>
        <div className={styles.up}>
          <div className={styles.text__section}>
            <h1>Машина</h1>
            <h2>Описание машины</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              alias explicabo, distinctio, totam a beatae sapiente dolorem
              cumque dolor pariatur reprehenderit nostrum placeat, qui ab
              deleniti quaerat officia ullam minus?
            </p>
            <h2>Характеристики</h2>
            <ul>
              <li>пизда.</li>
              <li>хуй:</li>
              <li>Шины:</li>
              <li>Вес:</li>
              <li>0-100км/ч:</li>
              <li>Крутящий момент:</li>
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
      </footer>
    </>
  );
};

export default CarsCard;

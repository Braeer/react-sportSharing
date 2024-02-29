import React from 'react';

import styles from './styleCarsCard.module.scss';

const CarsCard = () => {
  return (
    <>
      <div className={styles.cars}>
        <div className="up">
          <div className={styles.text__section}>
            <h1>Машина</h1>
            <h2>Описание машины</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus alias explicabo,
              distinctio, totam a beatae sapiente dolorem cumque dolor pariatur reprehenderit
              nostrum placeat, qui ab deleniti quaerat officia ullam minus?
            </p>
            <h2>Характеристики</h2>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
            </ul>
          </div>
          <img src="" alt="" />
        </div>
        <div className={styles.line}></div>
        <div className={styles.down}>
          <div className={styles.price}>19999₽</div>
          <div className={styles.status}>Свободно</div>
          <div><button>Забронировать</button></div>
        </div>
      </div>
    </>
  );
};

export default CarsCard;

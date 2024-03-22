import React from 'react';

import styles from './styleCarsCard.module.scss';
import axios from 'axios';

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
  const [rent, setRent] = React.useState();
  const [isRented, setIsRented] = React.useState(false);

  React.useEffect(() => {
    try {
      const fetchRent = async () => {
        const { data } = await axios.get('https://ffefae0dde2f5fa4.mokky.dev/rented-cars');
        setRent(data);
      };
      fetchRent();
    } catch (err) {
      console.log(err);
      alert('Не удалось загрузить данные!');
    }
  }, []);

  const check = rent && rent.map((el) => el.title).includes(title);

  const onClickAddCars = (obj) => {
    try {
      const timer = () =>
        setTimeout(() => {
          const dataCars = { title: obj };
          if (!rent.map((el) => el.title).includes(dataCars.title)) {
            axios.post('https://ffefae0dde2f5fa4.mokky.dev/rented-cars', dataCars);
            setRent((prev) => [...prev, dataCars]);
            setIsRented(true);
          }
        }, 500);
      timer();
    } catch (err) {
      console.log(err);
      alert('Не удалось загрузить данные!');
    }
  };

  return (
    <>
      <div className={styles.cars}>
        <div className={styles.up}>
          <img src={image} alt="" />
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
        </div>
        <div className={styles.line}></div>
        <div className={styles.down}>
          <div className={styles.price}>19999₽</div>
          <div className={check ? styles.rented : styles.free}>{check ? 'Занят' : 'Свободен'}</div>
          <button onClick={() => onClickAddCars(title)}>Забронировать</button>
        </div>
      </div>
    </>
  );
};

export default CarsCard;

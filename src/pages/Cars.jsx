import React from "react";
import CarsCard from "../components/CarsCard";
import { useAuth } from "../hooks/use-auth";
import axios from "axios";
import { Navigate } from "react-router-dom";


const Cars = () => {
  const { isAuth } = useAuth();
  const [cars, setCars] = React.useState([]);

  React.useEffect(() => {
    try {
      const fetchCars = async () => {
        const { data } = await axios.get(
          "https://ffefae0dde2f5fa4.mokky.dev/car-items"
        );
        setCars(data);
      };
      fetchCars();
    } catch (err) {
      console.log(err);
      alert('Не удалось загрузить данные!')
    }
  }, []);
  console.log(cars);

  // Включение проверки авторизации
  // Выключенный на данный момент
  // if(!isAuth) {
  //   return (
  //     <Navigate to="/sign-in" />
  //   )
  // }

  return (
    <>
      <h1 className="cars__title">Автомобили</h1>
      {cars.map((obj) => (
        <CarsCard
          image={obj.imageUrl}
          title={obj.name}
          description={obj.description}
          power={obj.horsepower}
          torque={obj.torque}
          transmission={obj.transmission}
          weight={obj.weight}
          wheels={obj.wheels}
          acceleration={obj.acceleration}
        />
      ))}
    </>
  );
};

export default Cars;

import React from "react";
import CarsCard from "../components/CarsCard";
import axios from "axios";

const Cars = () => {
  // try {
  //   const { data } = axios.get("https://ffefae0dde2f5fa4.mokky.dev/car-items");
  //   console.log(data);
  // } catch (err) {
  //   console.log(err);
  //   alert("У вас проблемы");
  // }

  // console.log(axios.get("https://ffefae0dde2f5fa4.mokky.dev/car-items"));
  const [cars, setCars] = React.useState([]);

  React.useEffect(() => {
    const fetchCars = async () => {
      const { data } = await axios.get(
        "https://ffefae0dde2f5fa4.mokky.dev/car-items"
      );
      setCars(data);
    };
    fetchCars();
  }, []);
  console.log(cars);
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

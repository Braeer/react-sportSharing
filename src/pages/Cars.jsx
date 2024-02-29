import React from 'react'
import CarsCard from '../components/CarsCard';

const Cars = () => {
  return (
    <>
    <h1 className='cars__title'>Автомобили</h1>
    <CarsCard />
    <CarsCard />
    <CarsCard />
    <CarsCard />
    </>
  )
}

export default Cars;
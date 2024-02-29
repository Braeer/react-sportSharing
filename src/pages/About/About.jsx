import React from 'react';

import style from './about.module.scss';
import Footer from '../../components/Footer';

const About = () => {
  return (
    <>
      <div className={style.about}>
        <h1>О нас</h1>
        <div className={style.line}></div>
        <p className={style.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quasi minus magni
          beatae unde eaque, rem esse dolorum tempore veniam repellendus, vitae ipsum quos iure
          dignissimos maiores harum! Suscipit, animi labore? Quo, doloribus sed sunt sint rerum
          placeat, impedit fugiat odio beatae facere, aliquam voluptatem adipisci? Atque dolore
          dolorum nemo assumenda eaque temporibus? Amet dolores assumenda vitae eaque placeat
          doloremque quibusdam deserunt incidunt ab et temporibus totam tenetur dolore sequi
          molestiae eos, saepe ad nemo repudiandae! Mollitia quam accusamus pariatur saepe tempora,
          autem odit veritatis libero temporibus dignissimos voluptates obcaecati, debitis ducimus.
          Eveniet cupiditate velit itaque perferendis sed iusto! Quo perferendis necessitatibus
          expedita officiis, voluptas vitae consectetur laudantium suscipit totam? Placeat,
          obcaecati molestiae voluptatum recusandae nobis nam modi eos architecto iure repellat eius
          dolore, qui tempore hic fugiat voluptatibus saepe unde! Omnis magni neque necessitatibus
          nam ab qui deleniti eaque sit, commodi dolore soluta praesentium quis molestias vero vitae
          officia.
        </p>
        <h2>Контакты</h2>
        <div className={style.line}></div>
        <p className={style.text}>Телефон: +7 999 999 99 99</p>
        <p className={style.text}>Адрес: г. Москва, ул. Ленина, 1</p>
      </div>

      <Footer />
    </>
  );
};

export default About;

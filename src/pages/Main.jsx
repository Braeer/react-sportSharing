import React from "react";
import Reviews from "../components/reviews";
import { Navigate } from "react-router-dom";
import Footer from '../components/Footer';

const Main = () => {
  return (
    <div>
      <div className="main__title-h1">
        <h1>Sport</h1>
        <br />
        <h1>Sharing</h1>
      </div>

      <section className="main__section-description">
        <div className="main__section-description__title">
          <h2>Кратко о нас</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae aliquam repellendus sapiente totam recusandae ipsa,
            deserunt, a velit nulla porro explicabo similique vel laborum
            corrupti reiciendis! Molestias perspiciatis dolorem dignissimos. Rem
            reprehenderit officia earum, aspernatur quod itaque, voluptas
            nesciunt magni dolores facilis id consectetur asperiores recusandae
            minus sapiente illo aut. Obcaecati enim est quos, aliquam eum
            molestias dolore libero magni sit rem consectetur magnam labore
            itaque illum, nulla dignissimos officiis, dolores atque? Consequatur
            natus, aut blanditiis nemo excepturi voluptate rem dicta labore
            molestias doloribus. Possimus laborum maxime praesentium expedita
            architecto eligendi aut voluptas molestias ab, quod fuga sequi error
            vel!
          </p>
        </div>
        <div className="main__section-description__img">
          <img src="" alt="" />
        </div>
      </section>

      <section className="main__section-about">
        <h1>Наши приоритеты</h1>
        <div className="main__section-about__cards">
          <div className="main__section-about__card main__section-about__card-1">
            <div>
              <h2>Низкая цена</h2>
              <p>Приоритет 1</p>
            </div>
            <img src="" alt="" />
          </div>

          <div className="main__section-about__card main__section-about__card-2">
            <div>
              <h2>Низкая цена</h2>
              <p>Приоритет 1</p>
            </div>
            <img src="" alt="" />
          </div>

          <div className="main__section-about__card main__section-about__card-3">
            <div>
              <h2>Низкая цена</h2>
              <p>Приоритет 1</p>
            </div>
            <img src="" alt="" />
          </div>

          <div className="main__section-about__card main__section-about__card-4">
            <div>
              <h2>Низкая цена</h2>
              <p>Приоритет 1</p>
            </div>
            <img src="" alt="" />
          </div>
        </div>
      </section>

      <section className="main__section-reviews">
        <h1>Отзывы</h1>
        <div className="main__section-reviews__cards">
          <Reviews />
        </div>
      </section>
    
      <section className='main__section-ready-now'>
        <h1>Готовы начать?</h1>
        <p>Начните сейчас и получите скидку</p>
        <button className='main__section-ready-now__button'>Начать</button>
      </section>
    
      <Footer />
    
      {/* <Navigate to="/sign-in" /> */}

    </div>
  );
};

export default Main;

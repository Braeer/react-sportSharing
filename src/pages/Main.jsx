import React from 'react';
import Reviews from '../components/reviews';
import { Navigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { useAuth } from '../hooks/use-auth';

const Main = () => {
  
  const { isAuth, email } = useAuth();

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
            🏎️ Наслаждайтесь адреналином и скоростью на нашем треке с прокатом спортивных
            автомобилей! Выбирайте из широкого выбора мощных автомобилей, чтобы почувствовать их
            динамику и профессиональную подготовку. Опыт вождения на предельных скоростях станет для
            вас незабываемым приключением. Доверьтесь нам и почувствуйте мощь спортивных
            автомобилей! 🏎️🔥
          </p>
        </div>
        <div className="main__section-description__img">
          <img src="/img/MainCar.jpg" alt="" />
        </div>
      </section>

      <section className="main__section-about">
        <h1>Наши приоритеты</h1>
        <div className="main__section-about__cards">
          <div className="main__section-about__card main__section-about__card-1">
            <div>
              <h2>Разнообразие автомобилей</h2>
              <p>
                Мы предлагаем широкий выбор спортивных автомобилей различных марок и моделей, что
                позволяет каждому клиенту выбрать автомобиль по своему вкусу и предпочтениям.
              </p>
            </div>
          </div>

          <div className="main__section-about__card main__section-about__card-2">
            <div>
              <h2>Профессиональная подготовка</h2>
              <p>
                Наши автомобили проходят регулярную техническую проверку и обслуживание, чтобы
                гарантировать безопасность и комфорт во время вождения. Наши инструкторы также
                обладают высоким уровнем профессионализма и опыта, что делает ваше вождение еще
                более приятным.
              </p>
            </div>
          </div>

          <div className="main__section-about__card main__section-about__card-3">
            <div>
              <h2>Гибкий график</h2>
              <p>
                Мы предлагаем возможность аренды спортивных автомобилей на различные сроки – от
                нескольких часов до нескольких дней, что позволяет нашим клиентам выбирать
                оптимальное время для наслаждения вождением.
              </p>
            </div>
          </div>

          <div className="main__section-about__card main__section-about__card-4">
            <div>
              <h2>Уникальный трек</h2>
              <p>
                Наш трек специально разработан для максимального комфорта и безопасности вождения
                спортивных автомобилей. Он предоставляет возможность испытать все возможности
                автомобиля и насладиться адреналином на полную катушку.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="main__section-reviews">
        <h1>Отзывы</h1>
        <div className="main__section-reviews__cards">
          <Reviews />
        </div>
      </section> */}

      <section className="main__section-ready-now">
        <h1>Готовы начать?</h1>
        <p>Начните сейчас и получите скидку</p>
        <button className="main__section-ready-now__button">Начать</button>
      </section>

      <Footer />
    </div>
  );
};

export default Main;

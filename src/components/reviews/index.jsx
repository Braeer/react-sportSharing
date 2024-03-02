import React from 'react';

import style from './reviews.module.scss';
const Reviews = () => {
  return (
    <>
      <div className={style.main__section_reviews__card}>
        <div className={style.main__section_reviews__card_title }>
          <h2>Пользователь</h2>
          <img src="" alt="" />
        </div>
        <div className={style.main__section_reviews__card_text}>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid quaerat itaque iusto nesciunt esse eveniet repudiandae sed veritatis delectus, ratione quo laudantium dignissimos consequuntur veniam odit earum fugiat ut. Amet.</p>
        </div>
      </div>
    </>
  );
};

export default Reviews;

import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styleFooter.module.scss';


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className='footer__line_1'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Cars</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="footer__line_2">
          <h2 className="footer__title">Контакты</h2>
          <p className="footer__text">Телефон: +7 (999) 999-99-99</p>
          <p className="footer__text">E-mail: 0h5V8@example.com</p>
        </div>
      </div>

      <p className="footer__text">© 2022 Sport Sharing. Все права защищены.</p>
    </div>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styleFooter.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__line_1}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cars">Cars</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer__line_2}>
          <h2>Контакты</h2>
          <p>
            Телефон:{' '}
            <a href="tel:+79999999999" className="footer__text">
              +7 (999) 999-99-99
            </a>
          </p>
          <p>
            Email:{' '}
            <a href="mailto:0h5V8@example.com" type="email" className="footer__text">
              0h5V8@example.com
            </a>
          </p>
        </div>
      </div>

      <p className={styles.footer__text}>© 2022 Sport Sharing. Все права защищены.</p>
      <br />
      <p className={styles.footer__text}>Программисты на эрдоганах</p>
    </div>
  );
};

export default Footer;

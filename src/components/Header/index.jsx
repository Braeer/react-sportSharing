import React from 'react';

import style from './styleHeader.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className={style.header}>
        <Link to="/" className={style.logo}>
          SportSharing
        </Link>
        <div className={style.container}>
          <nav className={style.menu}>
            <ul>
              <li>
                <Link to="/">Cars</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <div className={style.authorization}>
            <Link className={style.sing_in}>Sing in</Link>
            <Link className={style.sing_up}>Sing up</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

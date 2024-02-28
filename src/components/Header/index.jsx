import React from 'react';

import style from './styleHeader.module.scss';

const Header = () => {
  return (
    <header>
      <div className={style.header}>
        <a className={style.logo} href="">Sport Sharing</a>
        <div className={style.container}>
          <nav className={style.menu}>
            <ul>
              <li><a href="#">Cars</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </nav>
          <div className={style.authorization}>
            <a className={style.sing_in} href="#">Sing in</a>
            <a className={style.sing_up} href="#">Sing up</a>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;

import React from 'react';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../redux/slices/userSlice';
import { useAuth } from '../../hooks/use-auth';
import style from './styleHeader.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isAuth } = useAuth();
  // const isAuth = true;
  const dispatch = useDispatch();
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
                <Link to="/cars">Cars</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <div className={style.authorization}>
            {!isAuth ? (
              <>
                <Link to="/sign-in" className={style.sing_in}>
                  Sing in
                </Link>
                <Link to="/sign-up" className={style.sing_up}>
                  Sing up
                </Link>
              </>
            ) : (
              <div className={style.user}>
                <Link to="/user-page" className={style.asd}>
                  User
                </Link>
                <button className={style.asd} onClick={() => dispatch(removeUser())}>
                  Log out
                </button>
              </div>
            )}
            {/* {isAuth ? <button onClick={() => dispatch(removeUser())}>Log out</button> : <></>} */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

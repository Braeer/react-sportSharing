<<<<<<< Updated upstream
import React from 'react';

import style from './styleHeader.module.scss';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../redux/slices/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const { isAuth } = useAuth();
=======
import React from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "../../redux/slices/userSlice";
import { useAuth } from "../../hooks/use-auth";
import style from "./styleHeader.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch();
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
          {isAuth ? (
            <>
            <div className={style.user}>
              <Link to="/user-page">Account</Link>
              <button onClick={() => dispatch(removeUser())}>Выйти</button>
            </div>
            </>
          ) : (
            <div className={style.authorization}>
              <Link to="/sign-in" className={style.sing_in}>
                Sing in
              </Link>
              <Link to="/sign-up" className={style.sing_up}>
                Sing up
              </Link>
            </div>
          )}
=======
          <div className={style.authorization}>
            {!isAuth ? (
              <Link to="/sign-in" className={style.sing_in}>
                Sing in
              </Link>
            ) : (
              <></>
            )}
            <Link to="/sign-up" className={style.sing_up}>
              Sing up
            </Link>
            {isAuth ? (
              <button onClick={() => dispatch(removeUser())}>
                LogOut{email}
              </button>
            ) : (
              <></>
            )}
          </div>
>>>>>>> Stashed changes
        </div>
      </div>
    </header>
  );
};

export default Header;

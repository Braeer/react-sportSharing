import React from "react";
import styles from "./login.module.scss";
import { Link } from "react-router-dom";
import LoginForm from "../../../components/Form/login-form/LoginForm";

const LoginPage = () => {
  return (
    <div className={styles.form_ground}>
      <h1>Login</h1>
      <LoginForm />
      <p>
        Or
        <Link to="/sign-up">ЗАРЕГИСТРИРУЙСЯ</Link>
      </p>
    </div>
  );
};

export default LoginPage;

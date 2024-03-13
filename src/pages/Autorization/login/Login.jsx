import React from "react";
import styles from "./login.module.scss";
import LoginForm from "../../../components/Form/login-form/LoginForm";

const LoginPage = () => {
  return (
    <div className={styles.form_ground}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;

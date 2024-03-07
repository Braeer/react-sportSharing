import React from "react";
import styles from "./register.module.scss";
import RegisterForm from "../../../components/Form/register/RegisterForm";

const RegisterPage = () => {
  return (
    <div className={styles.register_ground}>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;

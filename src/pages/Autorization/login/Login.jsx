import React from "react";
import "./login.module.scss";
import { Link } from "react-router-dom";
import LoginForm from "../../../components/Form/login-form/LoginForm";

const LoginPage = () => {
  return (
    <>
      <h1>Login</h1>
      <LoginForm />
      <p>
        Or
        <Link to="/sign-up">ЗАРЕГИСТРИРУЙСЯ</Link>
      </p>
    </>
  );
};

export default LoginPage;

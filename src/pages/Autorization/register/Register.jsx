import React from "react";
import "./register.module.scss";
import { Link } from "react-router-dom";
import RegisterForm from "../../../components/Form/register/RegisterForm";

const RegisterPage = () => {
  return (
    <>
      <h2>Registration page!!!</h2>
      <RegisterForm />
      <p>
        Already have account <Link to="/sign-in">Login</Link>
      </p>
    </>
  );
};

export default RegisterPage;

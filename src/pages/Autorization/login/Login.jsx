import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <h1>Login</h1>
      <p>
        Or
        <Link to="/sign-up">ЗАРЕГИСТРИРУЙСЯ</Link>
      </p>
    </>
  );
};

export default LoginPage;

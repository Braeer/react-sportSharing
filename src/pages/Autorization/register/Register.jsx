import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <>
      <h2>Registration page!!!</h2>
      <p>
        Already have account <Link to="/sign-in">Login</Link>
      </p>
    </>
  );
};

export default RegisterPage;

import React from "react";
import { useDispatch } from "react-redux";
// import { setUser } from "redux/slices/userSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import Form from "../Form";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error);
  };

  return (
    <>
      <Form title={"Register"} handleClick={handleRegister} />
    </>
  );
};

export default RegisterForm;

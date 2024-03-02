import React from "react";
import { useDispatch } from "react-redux";
// import { setUser } from "redux/slices/userSlice";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import Form from "../Form";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error);
  };

  return <Form title={"Login"} handleClick={handleLogin} />;
};

export default LoginForm;

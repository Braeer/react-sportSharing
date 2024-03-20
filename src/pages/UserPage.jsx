import React from "react";
import { useAuth } from "../hooks/use-auth";
import { useDispatch } from "react-redux";
import { removeUser } from "../redux/slices/userSlice";
import { Navigate } from "react-router-dom";

const UserPage = () => {
  const { isAuth } = useAuth();
  return isAuth ? (
    <div>
      <h2>Личный кабинет</h2>
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <button></button>
        <span>Фамилия:{}</span>
        <span>Имя:</span>
        <span>Email:</span>
      </div>
    </div>
  ) : (
    <Navigate to="/sign-in" />
  );
};

export default UserPage;

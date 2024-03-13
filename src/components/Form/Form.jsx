import { React, useState } from "react";
import styles from "./form.module.scss";

import { Link } from "react-router-dom";

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div className={styles.form_wrapper}>
      <h2>{title}</h2>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />

      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      />
      <button
        className="submit-button"
        onClick={() => handleClick(email, pass)}
      >
        {title === "Login" ? "Sign in" : "Sign up"}
      </button>

      <p>
        {
          <p>
            <Link to={`/${title === "Login" ? "sign-up" : "sign-in"}`}>
              {title === "Login" ? "Зарегистрироваться" : "Войти"}
            </Link>
          </p>
        }
      </p>
    </div>
  );
};

export default Form;

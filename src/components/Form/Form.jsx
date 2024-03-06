import { React, useState } from "react";
import styles from "./form.module.scss";

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div className="form-wrapper">
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
        {title}
      </button>
    </div>
  );
};

export default Form;

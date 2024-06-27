import React from "react";
import style from "./login.module.css";

const Login = () => {
  return (
    <div className={style.container}>
      <form className={style.form}>
        <label>Email</label>
        <input className={style.input} type="Email" placeholder="Enter Email" />

        <label>Password</label>
        <input  className={style.input} type="password" placeholder="Enter Password" />

        <button  type="submit" className={style.submit}>
          submit
        </button>
        <p></p>
      </form>
    </div>
  );
};
export default Login;

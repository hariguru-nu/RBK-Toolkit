import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";
import Logo from "@Assets/images/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: ""
  });

  const { username, password } = values;

  const router = useRouter();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => {
      return {
        ...prevValues,
        [name] : value
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(username && password) {
      router.push('/userlist');
    }
  }

  return (
    <div className={styles.row}>
      <div className={styles.loginFormStyle}>
        <div className={`${styles.loginForm} ${styles.formAddress}`}>
          <h2 className={styles.formTitle}>Reebok Toolkit</h2>
          <div className={styles.logo}>
            <Image className={styles.logo} src={Logo} alt="img" />
          </div>
          <div className={styles.formName}>
            <span className={styles.formSpan}>
              Hey, Enter your details to get sign in to your account
            </span>
          </div>
          <form className={styles.signinForm} onSubmit={handleSubmit}>
            <label className={styles.formLabel}>EMAIL ADDRESS</label>
            <input
              type="email"
              id={styles.inputEmail}
              name="username"
              value={username}
              onChange={handleChange}
              className={styles.formControl}
              placeholder="Email Address"
              required
              autoFocus
            />
            <label className={styles.formLabel}>PASSWORD</label>
            <input
              type="password"
              id={styles.inputPassword}
              name="password"
              value={password}
              className={styles.formControl}
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <button className={styles.btnSubmit} type="submit">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

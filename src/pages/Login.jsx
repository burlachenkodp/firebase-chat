import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit!");
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setErr(true);
      console.log(error.message);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat</span>
        <span className="title">Login</span>

        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="display email" />
          <input type="password" placeholder="display password" />

          <button>Login</button>
          {err && <span>smth went wrong</span>}
        </form>
        <p>Havent acc yet? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;

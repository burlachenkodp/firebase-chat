import React from "react";
import Add from "../img/addAvatar.png";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat</span>
        <span className="title">Register</span>

        <form action="">
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="display email" />
          <input type="password" placeholder="display password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="addavatart" />
            <span>Add an avatar</span>
          </label>
          <button>sign up</button>
        </form>
        <p>Do u have an acc? Login</p>
      </div>
    </div>
  );
};

export default Register;

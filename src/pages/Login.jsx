import React from 'react'

const Login = () => {
  return (
    <div className="formContainer">
    <div className="formWrapper">
      <span className="logo">Chat</span>
      <span className="title">Login</span>

      <form action="">
        <input type="email" placeholder="display email" />
        <input type="password" placeholder="display password" />
       
        <button>Login</button>
      </form>
      <p>Havent acc yet? Register</p>
    </div>
  </div>
  )
}

export default Login
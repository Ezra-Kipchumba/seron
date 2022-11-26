import React, { useState } from "react";

function Portal() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (event) => {
    alert ("logged in successfully")
  }

  return (
    <div className="loginbox">
      <form className="forms">
        <br></br>
        <br></br>
        <h1>Login here</h1>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="User name"
          type="text"
          name="userName"
          className="form-group form-control"
          required
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          type="email"
          name="email"
          className="form-group form-control"
          required
        />
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          name="password"
          className="form-group form-control"
          required
        />{" "}
        <br></br>
        <button
          type="submit"
          onClick={handleClick}
          className="btn btn-primary">
          <a href="/" id="btn">Login </a>
        </button>
        <br></br>
        <a href="/">Forgot your password?</a>
        <p>
          Don't have an account yet?{" "}
          <a href="./Signup">Sign Up Here </a>
        </p>
      </form>
    </div>
  );
}
export default Portal;
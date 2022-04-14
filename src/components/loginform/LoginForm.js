import React from "react";
import Input from "../Input";
import { useState } from "react";
import { projectAuth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import "./loginform.scss";

function LoginForm() {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (email && pass) {
      projectAuth.createUserWithEmailAndPassword(email, pass);
      navigate("/profile");
    }
  };

  return (
    <>
      <div className="loginForm">
        <div className="loginContainer">Login.</div>
      </div>
      <div className="input">
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="Email"
          placeholder="email"
        />

        <Input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          name="Password"
          type="password"
          placeholder="password"
        />
        <button onClick={handleSignUp}>Log In</button>
      </div>
    </>
  );
}
export default LoginForm;

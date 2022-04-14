import React from "react";
import Input from "../Input";
import { useState } from "react";
import useSignup from "../../hoocs/useSignUp";
import { useNavigate } from "react-router-dom";
import "./sign.scss";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const { isPending, error, signUp } = useSignup();

  const handleSignup = () => {
    if (email && pass) {
      signUp(email, pass, username).then(() => navigate("/boards/:boardId"));
    }
  };

  return (
    <div className="signForm">
      <div className="top">
        <span>
          <AddIcCallIcon className="icon" />
          (011) 11 11 11
        </span>
      </div>
      <hr />
      {isPending ? (
        <div>...Loading</div>
      ) : (
        <div className="inputsign">
          <div className="inpForm">
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="Email"
              placeholder="email"
              type="email"
            />
            <Input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              name="Password"
              type="password"
              placeholder="password"
            />
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="Username"
              placeholder="userName"
            />

            <button onClick={handleSignup}>Sign Up</button>
            {error && <span>Something went wrong</span>}
          </div>
        </div>
      )}
    </div>
  );
}
export default SignUpForm;

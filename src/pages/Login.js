import { Button } from "bootstrap";
import React from "react";
import { useBootcampContext } from "../state";
import LoginForm from "../components/loginform/LoginForm";

function Login() {
  const { dispatch } = useBootcampContext();
  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default Login;

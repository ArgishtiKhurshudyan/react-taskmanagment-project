import React from "react";
import SignUpForm from "../components/signupform/Signup";
import { useAuthContext } from "../state/AuthContext";

export default function Signup() {
  const {
    state: { user },
  } = useAuthContext();

  return (
    <div className="container">
      <SignUpForm />
    </div>
  );
}

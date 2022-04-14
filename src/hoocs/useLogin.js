import { useState } from "react";
import { Navigate } from "react-router-dom";
import { projectAuth } from "../firebase";
import { AUTH_ACTIONS_TYPES, useAuthContext } from "../state/AuthContext";

export default function useLogin() {
  const [ispending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  const { dipatch } = useAuthContext;

  const logIn = async (email, pass) => {
    setIsPending(true);
    try {
      let res = await projectAuth.createUserWithEmailAndPassword(email, pass);
      setIsPending(false);
      dispatchEvent({ type: AUTH_ACTIONS_TYPES.SIGNUP, user: res.user });
      return <Navigate replace to="/profile" />;
    } catch (err) {
      setError(true);
    }
  };

  return { logIn, error, ispending };
}

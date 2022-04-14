import { useState } from "react";
import { Navigate } from "react-router-dom";
import { projectAuth } from "../firebase";
import { AUTH_ACTIONS_TYPES, useAuthContext } from "../state/AuthContext";

export default function useSignup() {
  const [ispending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  const { dipatch } = useAuthContext;

  const signUp = async (email, pass, username) => {
    setIsPending(true);
    try {
      let res = await projectAuth.createUserWithEmailAndPassword(email, pass);
      if (username) {
        let updateRes = await res.user.updateProfile({ displayName: username });
      }
      setIsPending(false);
      dispatchEvent({ type: AUTH_ACTIONS_TYPES.SIGNUP, user: res.user });
      return <Navigate replace to="/home" />;
    } catch (err) {
      setError(true);
    }
  };

  return { signUp, error, ispending };
}

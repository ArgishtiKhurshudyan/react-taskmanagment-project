import React from "react";
import "./profile.scss";
import useCollection from "./../../hoocs/useCollection";
import { CircularProgress, LinearProgress } from "@mui/material";
import User from "./User";

const Profile = () => {
  const { isLoading } = useCollection("/tasks");

  return (
    <div className="profil">
      {isLoading ? (
        <div className="loader">
          <CircularProgress />
        </div>
      ) : (
        <User />
      )}
    </div>
  );
};

export default Profile;

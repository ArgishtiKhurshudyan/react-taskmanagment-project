import React from "react";
import "./home.scss";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import TaskIcon from "@mui/icons-material/Task";
import { Link } from "react-router-dom";

function ForHome() {
  return (
    <>
      <div className="home">
        <div className="homeContainer">Home.</div>
      </div>
      <div className="homeBackground">
        <h1>React Js</h1>

        <div className="profile">
          <Link to="/login" style={{ textDecoration: "none" }}>
            <h2>
              <PermIdentityOutlinedIcon />
              Profile
              <hr />
            </h2>
          </Link>

          <Link to="/signup" style={{ textDecoration: "none" }}>
            <h2>
             <TaskIcon />
              Tasks
              <hr />
            </h2>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ForHome;

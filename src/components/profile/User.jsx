import React from "react";
import "./user.scss";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EmailIcon from "@mui/icons-material/Email";
import { init } from "ityped";
import { useEffect, useRef } from "react";
const User = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 50,
      showCursor: true,
      strings: ["Developer"],
    });
  }, []);

  return (
    <div className="userContainer">
      <div className="icon">
        <span>
          <AddIcCallIcon /> (011) 11 11 11
        </span>
        <span>
          <EmailIcon /> arg@gmail.com{" "}
        </span>
      </div>
      <div className="sectionContainer">
        <div className="imgConatiner">
          <img
            src="https://miro.medium.com/max/1360/1*IRGHmiGsa16stedQvIaZfw.gif"
            alt=""
          />
        </div>
      </div>

      <div className="titleContainer">
        <h2>
          Hi there.
          <br /> My name is Argishti Khurshudyan{" "}
        </h2>
        <h3>
          I'm front-end <span ref={textRef}></span>
        </h3>
      </div>
    </div>
  );
};

export default User;

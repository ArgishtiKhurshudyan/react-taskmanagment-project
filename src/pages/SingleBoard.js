import React, { useEffect, useState } from "react";
import { useBootcampContext } from "../state";
import Modal from "./../components/modal/Modal";
import useCollection from "./../hoocs/useCollection";
import TaskColumn from "./../components/taskColum/TaskColumn";
import { CircularProgress } from "@mui/material";

function SingleBoard() {
  const STATUSES = {
    TODO: "To do",
    DOING: "Doing",
    DONE: "Done",
  };

  const { state, dispatch } = useBootcampContext();

  const { isLoading } = useCollection("/tasks");

  return (
    <div className="columnWrapper">
      <div className="menu">
        <h1>Tasks.</h1>
      </div>
      {isLoading ? (
        <div className="loader">
          {" "}
          <CircularProgress />
        </div>
      ) : (
        <>
          <TaskColumn tasks={state.tasks} status={STATUSES.TODO} />
          <TaskColumn tasks={state.tasks} status={STATUSES.DOING} />
          <TaskColumn tasks={state.tasks} status={STATUSES.DONE} />
        </>
      )}
      {state.isModalOpen && <Modal />}
    </div>
  );
}

export default SingleBoard;

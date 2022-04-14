import React from "react";
import { ACTIONS_TYPES, useBootcampContext } from "../state";
import useFireStore from "./../hoocs/useFireStore";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Task({
  id,
  status,
  title,
  category,
  description,
  priority,
  styledel,
  styleedt,
}) {
  const { deleteDoc, editDoc } = useFireStore();
  const { dispatch } = useBootcampContext();

  styledel = {
    color: "red",
    marginLeft: "213px",
    cursor: "pointer",
  };

  styleedt = {
    cursor: "pointer",
  };

  const deleteTask = () => {
    deleteDoc("/tasks", id);
  };
  const editTask = () => {
    dispatch({ type: ACTIONS_TYPES.OPEN_MODAL });
    dispatch({
      type: ACTIONS_TYPES.UPDATE_CURRENT_TASK,
      task: { id, status, title, category, description, priority },
    });
  };
  return (
    <div className="task" key={id}>
      <div className="taskDiv">
        <p className={`priority  ${priority}`}>{priority}</p>
        <span>{title}</span>
        <p>{description}</p>
        <p>{category}</p>
      </div>
      <div>
        <DeleteIcon style={styledel} onClick={() => deleteTask(id)} />

        <EditIcon style={styleedt} onClick={() => editTask(id)} />
        <hr />
      </div>
    </div>
  );
}
export default Task;

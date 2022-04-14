import React, { useMemo } from "react";
import { ACTIONS_TYPES, useBootcampContext } from "../../state";
import Task from "../Task";
import "./taskcolum.scss";

function TaskColumn({ status, tasks }) {
  const { dispatch } = useBootcampContext();
  const filteredTasks = useMemo(() =>
    tasks.filter((item) => item.status === status, [tasks, status])
  );
  const addTask = () => {
    dispatch({ type: ACTIONS_TYPES.OPEN_MODAL });
    dispatch({ type: ACTIONS_TYPES.UPDATE_CURRENT_TASK, task: { status } });
  };

  return (
    <div className="taskdiv">
      <div className="divtask">
        <h2>{status}</h2>
        {filteredTasks.map((item) => (
          <Task key={item.id} {...item} />
        ))}
        <button className="taskbtn" onClick={addTask}>
          Add task{" "}
        </button>
      </div>
    </div>
  );
}

export default TaskColumn;

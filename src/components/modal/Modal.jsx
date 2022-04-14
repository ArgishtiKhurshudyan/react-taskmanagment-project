import React, { useEffect, useState } from "react";
import "./modal.scss";
import { ACTIONS_TYPES, useBootcampContext } from "../../state";
import Input from "../Input";

import useFireStore from "../../hoocs/useFireStore";

function Modal() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");

  const {
    dispatch,
    state: { currentTask },
  } = useBootcampContext();

  useEffect(() => {
    if (currentTask.id) {
      setDescription(currentTask.description);
      setCategory(currentTask.category);
      setTitle(currentTask.title);
      setPriority(currentTask.priority);
    }
  }, []);
  const { addDoc, editDoc } = useFireStore();
  const createHandleTask = async () => {
    const task = {
      title,
      description,
      category,
      priority,
      status: currentTask.status,
    };

    dispatch({ type: ACTIONS_TYPES.OPEN_MODAL });
    if (currentTask.id) {
      editDoc("/tasks", { ...task, id: currentTask.id });
    } else {
      addDoc("/tasks", task);
    }
  };
  return (
    <div className="modal">
      <div className="modalContent">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="Title"
          placeholder="Title"
        />
        <Input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          name="Description"
          placeholder="Description"
        />
        <Input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          name="Category"
          placeholder="Category"
        />

        <Input
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          name="Priority"
          placeholder="Priority"
        />
        <button onClick={createHandleTask}>Edit task</button>
      </div>
    </div>
  );
}
export default Modal;

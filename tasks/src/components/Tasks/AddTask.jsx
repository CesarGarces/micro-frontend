import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/taskSlice";
import { ContainerAddTask, Input } from "./Tasks.styles";

const AddTask = () => {
  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskName.trim() === "") return;
    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false,
    };
    dispatch(addTask(newTask));
    setTaskName("");
  };

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  const buttonStyles = {
    backgroundColor: "blue",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    marginLeft: "10px",
  };

  useEffect(() => {
    const customButton = document.querySelector("custom-button");
    customButton.addEventListener("onClick", handleAddTask);

    return () => {
      customButton.removeEventListener("onClick", handleAddTask);
    };
  }, []);

  return (
    <ContainerAddTask>
      <Input
        type="text"
        value={taskName}
        onKeyDown={handleKeyDown}
        onChange={e => setTaskName(e.target.value)}
        placeholder="Nueva Tarea"
      />
      <custom-button onClick={handleAddTask} style={buttonStyles}>
        Agregar Tarea
      </custom-button>
    </ContainerAddTask>
  );
};

export default AddTask;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTask, updateTask } from "../../store/taskSlice";
import {
  Container,
  Title,
  List,
  ListItem,
  NoTasks,
  ButtonStyles,
  ButtonPosition,
} from "./Tasks.styles";
import { MdDeleteForever } from "react-icons/md";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { toast } from "sonner";

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleRemoveTask = id => {
    dispatch(removeTask(id));
    toast.success("Tarea eliminada exitosamente");
  };

  const handleToggleComplete = task => {
    dispatch(updateTask({ ...task, completed: !task.completed }));
    if (!task.completed) return toast.success(`Tarea ${task.name} completada`);
    if (task.completed) return toast.info(`Tarea ${task.name} pendiente`);
  };

  if (!tasks || tasks.length === 0) {
    return <NoTasks>No hay tareas</NoTasks>;
  }

  return (
    <Container>
      <Title>Lista de Tareas</Title>
      <List>
        {tasks.map(task => (
          <ListItem key={task.id}>
            {task.name} {task.completed ? "(Completado)" : ""}
            <ButtonPosition>
              <custom-button
                onClick={() => handleToggleComplete(task)}
                style={{
                  ...ButtonStyles.base,
                  ...(task.completed
                    ? ButtonStyles.complete
                    : ButtonStyles.incomplete),
                }}
              >
                {task.completed ? (
                  <ImCheckboxChecked />
                ) : (
                  <ImCheckboxUnchecked />
                )}
              </custom-button>
              <custom-button
                onClick={() => handleRemoveTask(task.id)}
                style={{
                  ...ButtonStyles.base,
                  ...ButtonStyles.remove,
                }}
                label="Eliminar"
              >
                <MdDeleteForever />
              </custom-button>
            </ButtonPosition>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default TaskList;

import React from "react";
import store from "../store/store";
import { Provider } from "react-redux";
import AddTask from "../components/Tasks/AddTask";
import { Toaster } from "sonner";
import TaskList from "../components/Tasks/TaskList";

const TasksPage = () => {
  return (
    <div>
      <Provider store={store}>
        <Toaster richColors />
        <div className="container">
          <AddTask />
          <TaskList />
        </div>
      </Provider>
    </div>
  );
};

export default TasksPage;

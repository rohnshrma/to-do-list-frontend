import Header from "./Header";
import "./App.css";
import FormArea from "./FormArea";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tasks from "./Tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTaskHandler = (item) => {
    setTasks((prevTasks) => [item, ...prevTasks]);
  };
  const removeTaskHandler = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const editTaskHandler = (editedTask, id) => {
    console.log("Incoming Update", editedTask, id);
    setTasks((prevTasks) => {
      return prevTasks.map((task) =>
        task.id === id ? { ...task, name: editedTask } : task
      );
    });
  };

  console.log("App Re-rendered");

  return (
    <>
      <Header />
      <FormArea onAdd={addTaskHandler} />
      <Tasks
        tasks={tasks}
        onRemove={removeTaskHandler}
        onEdit={editTaskHandler}
      />
    </>
  );
}

export default App;

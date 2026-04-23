import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, onRemove, onEdit }) => {
  return (
    <div>
      {tasks.map((task) => {
        return (
          <Task task={task} onEdit={onEdit} onRemove={onRemove} key={task.id} />
        );
      })}
    </div>
  );
};

export default Tasks;

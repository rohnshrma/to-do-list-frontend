import React, { useState } from "react";
import EditArea from "./EditArea";

const Task = ({ task, onRemove, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <div className="border p-2 mb-2 row justify-content-between align-items-center ">
        <div className="col-8">
          <p>{task.name}</p>
        </div>
        <div className="col-2">
          <button onClick={() => setIsEditing(true)}>EDIT</button>
          <button
            onClick={() => {
              onRemove(task.id);
            }}
          >
            DELETE
          </button>
        </div>
      </div>
      {isEditing && (
        <>
          <EditArea onEdit={onEdit} id={task.id} name={task.name} />
          <button onClick={() => setIsEditing(false)}>CLOSE</button>
        </>
      )}
    </>
  );
};

export default Task;

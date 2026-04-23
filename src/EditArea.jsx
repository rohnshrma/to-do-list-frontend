import React, { useState } from "react";

import "./FormArea.css";

const EditArea = ({ onEdit, id, name }) => {
  const [input, setInput] = useState(name);

  const changeHandler = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onEdit(input, id);
    setInput("");
  };

  return (
    <div className="formarea">
      <form onSubmit={submitHandler}>
        <input
          onChange={changeHandler}
          type="text"
          name="task"
          placeholder="Enter new task name"
          value={input}
        />
        <button type="submit">UPDATE TASK</button>
      </form>
    </div>
  );
};

export default EditArea;

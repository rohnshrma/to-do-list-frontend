import React, { useState } from "react";
import "./FormArea.css";

const FormArea = () => {
  console.log("Form Re-rendered");

  // state , state updating function
  var [count, setCount] = useState(0);

  function incrementHandler() {
    setCount(count + 1);
  }
  function decrementHandler() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }

  return (
    <div className="formarea">
      <h1>{count}</h1>
      <button onClick={incrementHandler}>INCREMENT</button>
      <button onClick={decrementHandler}>DECREMENT</button>
      <button onClick={reset}>RESET</button>
      {/* <form>
        <input type="text" name="task" placeholder="Enter task name" />
        <button type="submit">ADD TASK</button>
      </form> */}
    </div>
  );
};

export default FormArea;

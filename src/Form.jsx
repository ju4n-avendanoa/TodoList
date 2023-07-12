import { useState } from "react";

export default function Form(props) {
  const [task, setTask] = useState("");

  const handleChange = ({ target }) => {
    setTask(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="task">New task</label>
        <input
          value={task}
          onChange={handleChange}
          type="text"
          id="task"
          className="border border-black"
        />
      </div>
      <button className="border border-black">Add task</button>
    </form>
  );
}

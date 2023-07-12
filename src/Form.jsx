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
    <form className="" onSubmit={handleSubmit}>
      <div className="flex flex-col p-8 gap-4 font-bold ">
        <label className={"mx-8 text-3xl text-[#3580BB]"} htmlFor="task">
          New task
        </label>
        <input
          value={task}
          onChange={handleChange}
          type="text"
          id="task"
          className="border-2 bg-white border-black mx-8 ring-2 ring-white"
        />
      </div>
      <button className="border border-black mx-16 bg-[#0E1419] text-[#3580BB] h-10 w-20 rounded-lg shadow-md shadow-[#3580BB] transition ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-[#3580BB] sm:mx-auto sm:block">
        Add task
      </button>
    </form>
  );
}

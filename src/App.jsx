import { useEffect, useState } from "react";
import "./App.css";
import Form from "./Form";
import List from "./List";

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEM");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  function addTodo(task) {
    if (!task) return;
    setTodos((prev) => {
      return [...prev, task];
    });
  }

  function deleteTodo(indexTarget) {
    setTodos((prev) => {
      return prev.filter((todo, index) => index !== indexTarget);
    });
  }

  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="box-border ">
      <Form onSubmit={addTodo} />
      <List todoList={todos} deleteAction={deleteTodo} />
    </div>
  );
}

export default App;

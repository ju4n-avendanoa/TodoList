export default function List(props) {
  const handleDelete = (indexTarget) => {
    props.deleteAction(indexTarget);
  };
  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {props.todoList.length === 0 && "No Todos"}
        {props.todoList.map((todo, index) => (
          <div className="flex gap-3">
            <input type="checkbox" id="todo" key={index} />
            <label htmlFor="todo">{todo}</label>
            <button
              onClick={() => handleDelete(index)}
              className="border border-black"
            >
              Delete
            </button>
          </div>
        ))}
      </ul>
    </>
  );
}

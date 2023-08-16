export default function List(props) {
  const handleDelete = (indexTarget) => {
    props.deleteAction(indexTarget);
  };
  return (
    <>
      <h1 className="m-16 text-[#3580BB] font-bold text-3xl">ToDo List</h1>
      <ul className="mx-16 list-disc">
        <p className="text-white text-2xl">
          {props.todoList.length === 0 && "No ToDos"}
        </p>
        {props.todoList.map((todo, index) => (
          <div className="flex items-center gap-3 py-3" key={index}>
            <li className="text-white text-xl mx-3" id="todo" key={index}>
              {todo}
            </li>
            <button
              onClick={() => handleDelete(index)}
              className="border border-black mx-5 h-10 w-20 bg-red-400 rounded-lg transition ease-in-out hover:scale-110"
            >
              Delete
            </button>
          </div>
        ))}
      </ul>
    </>
  );
}

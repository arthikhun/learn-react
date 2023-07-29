import { useNavigate } from "react-router-dom";

function Todo({ id, title, description, handleDelete }) {
  const navigate = useNavigate();
  function handleEdit() {
    navigate(`/edit/${id}`);
  }


  return (
    <div className="flex flex-col border bg-green-100 p-5">
      <div>Title : {title}</div>
      <div>Description : {description}</div>
      <div className="flex gap-2">
        <button
          className="bg-blue-400 rounded text-white px-2"
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          id={id}
          className="bg-red-400 rounded text-white px-2"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default Todo;

import { useRef, useEffect } from "react";
import Layout from "../components/layout";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const titleRef = useRef();
  const desRef = useRef();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getTodo() {
      const res = await fetch("http://localhost:8080/todo/" + id, {
        method: "GET",
      });
      const data = await res.json();
      const todo = data.todo;
      titleRef.current.value = todo.title;
      desRef.current.value = todo.desc;
    }

    getTodo();
  }, []);

  async function handleEdit() {
    const title = titleRef.current.value;
    const des = desRef.current.value;
    console.log(title, des);

    const res = await fetch("http://localhost:8080/todo/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        desc: des,
      }),
    });

    const data = await res.json();
    if (res.status === 200) {
      navigate("/view");
    }
  }



  return (
    <Layout>
      <div className="flex flex-col justify-center items-center h-full gap-1">
        <div>Title</div>
        <input type="text" className="border" ref={titleRef}></input>
        <div>Des</div>
        <input type="text" className="border" ref={desRef}></input>
        <button
          type="button"
          className="bg-blue-500 text-white px-2 rounded"
          onClick={handleEdit}
        >
          Edit
        </button>
      </div>
    </Layout>
  );
}

export default Edit;

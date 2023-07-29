import { useRef } from "react";
import Layout from "../components/layout";

function Add() {
  const titleRef = useRef();
  const desRef = useRef();

  async function handleAdd() {
    const title = titleRef.current.value;
    const des = desRef.current.value;
    console.log(title, des);

    const res = await fetch("http://localhost:8080/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        desc: des,
      }),
    });

    const data = await res.json();
    console.log(data);
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
          onClick={handleAdd}
        >
          add
        </button>
      </div>
    </Layout>
  );
}

export default Add;

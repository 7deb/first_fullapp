import React, { useState } from "react";
import axios from "axios";

export function CreateTodo(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTodo = () => {
    axios
      .post(
        "http://localhost:3000/todo",
        {
          title: title,
          description: description,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        alert("Todo added");
      })
      .catch((error) => {
        console.error("Error adding todo:", error);
        alert("Error adding todo");
      });
  };

  const showTodo = () => {
    axios
      .get("http://localhost:3000/todo")
      .then((response) => {
        console.log("Todos:", response.data);
      })
      .catch((error) => {
        console.error("Error showing todos:", error);
        alert("Error showing todos");
      });
  };

  return (
    <div>
      <input
        style={{ padding: 10, margin: 10 }}
        id="title"
        type="text"
        placeholder="title"
        onChange={(e) => {
          const value = e.target.value;
          setTitle(value);
        }}
      ></input>
      <br></br>

      <input
        style={{ padding: 10, margin: 10 }}
        id="title"
        type="text"
        placeholder="description"
        onChange={(e) => {
          const value = e.target.value;
          setDescription(value);
        }}
      ></input>
      <br></br>

      <button style={{ padding: 10, margin: 10 }} onClick={addTodo}>
        Add todo
      </button>
      <br></br>

      <button style={{ padding: 10, margin: 10 }} onClick={showTodo}>
        Show todos
      </button>
      <br></br>
    </div>
  );
}

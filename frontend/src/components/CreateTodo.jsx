import { react, useState } from "react";

export function CreateTodo(props){
    const [title,setTitle] = useState("");
    const[description,setDescription]=useState("");

    return <div>
        <input style={{
            margin:5,
            padding:10,
        }}
        id="title" type="text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(value);
        }} ></input><br></br>
        <input style={{
            margin:5,
            padding:10,
        }} id="title" type="text" placeholder="description" onChange={function(e){
            const value = e.target.value;
            setDescription(value);
        }} ></input><br></br>
        <button style={{
            margin:5,
            padding:10,
        }}
        onClick={() => {
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description,
                }),
                headers: {
                    "Content-type": "application/json",
                },
            })
            .then(async function (res) {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                const json = await res.json();
                alert("Todo added");
            })
            .catch((error) => {
                console.error("Error adding todo:", error);
                alert("Error adding todo");
            });
        }}>Add todo</button>
    </div>
}
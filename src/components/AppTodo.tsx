import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase";

type Props = {};

export interface Todo {
  text: string;
  checked: boolean;
  id: string;
}
export default function AppTodo() {
  const [todo, setTodos] = useState("");
  const hangleSubmit = async (e: any) => {
    e.preventDefault();
    if (todo !== "") {
      let data: Todo = {
        text: todo,
        checked: false,
        id: "",
      };
      await addDoc(collection(db, "todos"), data);
      setTodos("");
    }
  };

  return (
    <div>
      <h1>AppTodo</h1>
      <form onSubmit={hangleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter todo"
            value={todo}
            onChange={(e) => {
              setTodos(e.target.value);
            }}
          />
        </div>
        <button>Add</button>
      </form>
    </div>
  );
}

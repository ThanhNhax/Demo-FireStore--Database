import React, { useRef, useState } from "react";
import { Todo } from "./AppTodo";

type Props = {
  todo: Todo;
  checked?: boolean;
  handleDelete: (id: string) => void;
  handleEdit: (todo: Todo, title: string) => void;
  toggleComplete: (todo: Todo) => void;
};

export default function Todos({
  todo,
  handleDelete,
  handleEdit,
  toggleComplete,
}: Props) {
  const [newTodo, setNewTodo] = useState<string>(todo.text);
  const handleChange = (e: any) => {
    e.preventDefault();
    if (todo.checked === true) {
      setNewTodo(todo.text);
    } else {
      todo.text = "";
      setNewTodo(e.target.value);
    }
  };

  return (
    <>
      <input
        onChange={() => toggleComplete(todo)}
        type="checkbox"
        checked={todo.checked ? true : false}
      />
      <input
        type="text"
        placeholder="Enter todo ..."
        onChange={handleChange}
        value={todo.text === "" ? newTodo : todo.text}
      />

      <button onClick={() => handleDelete(todo.id)}>&times;</button>
      <button onClick={() => handleEdit(todo, newTodo)}>Edit</button>
    </>
  );
}

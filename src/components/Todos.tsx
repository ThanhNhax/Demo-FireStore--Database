import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/configStore";
import {
  deleteTodos,
  handleEdit,
  toggleComplete,
} from "../redux/todos/todoReduxer";
import { Todo } from "./AppTodo";

type Props = {
  todo: Todo;
  checked?: boolean;
};

export default function Todos({ todo }: Props) {
  const [newTodo, setNewTodo] = useState<string>(todo.text);
  const dispatch: AppDispatch = useDispatch();

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
        onChange={(e) => setNewTodo(e.target.value)}
        value={newTodo}
      />

      <button
        onClick={() => {
          let action = deleteTodos(todo.id);
          dispatch(action);
        }}
      >
        &times;
      </button>
      <button onClick={() => handleEdit(todo, newTodo)}>Edit</button>
    </>
  );
}

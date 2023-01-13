import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/configStore";
import { getArrTodos } from "../redux/todos/todoReduxer";
import AppTodo, { Todo } from "./AppTodo";
import Todos from "./Todos";

// type Props = {};

export default function TodoApp() {
  const { arrTodos } = useSelector((state: RootState) => state.todos);
  const dispatch: AppDispatch = useDispatch();
  // Add Todos firebase

  // Get todos tu firebase

  useEffect(() => {
    let action = getArrTodos();
    dispatch(action);
  }, []);

  return (
    <>
      <AppTodo />

      {/* Render list todos */}
      {arrTodos.map((todo: Todo, index: number) => {
        return (
          <div key={index}>
            <Todos todo={todo} />
          </div>
        );
      })}
    </>
  );
}

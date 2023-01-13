import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import AppTodo, { Todo } from "./components/AppTodo";
import Todos from "./components/Todos";
import { db } from "./firebase";
import { AppDispatch, RootState } from "./redux/configStore";
import { deleteTodo, getArrTodos } from "./redux/todos/todoReduxer";

function App() {
  const { arrTodos } = useSelector((state: RootState) => state.todos);
  const dispatch: AppDispatch = useDispatch();
  console.log({ arrTodos });
  // Add Todos firebase

  // Get todos tu firebase

  useEffect(() => {
    let action = getArrTodos();
    dispatch(action);
  }, []);

  return (
    <div className="App">
      <AppTodo />
      {/* render todos ra giao dien */}

      {arrTodos.map((todo: Todo) => {
        return (
          <div key={todo.id}>
            <Todos todo={todo} />
          </div>
        );
      })}
    </div>
  );
}

export default App;

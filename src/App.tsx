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
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/todo">Todo App</Link>
          </li>
        </ul>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}

export default App;

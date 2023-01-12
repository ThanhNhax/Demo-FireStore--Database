import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import "./App.css";
import AppTodo, { Todo } from "./components/AppTodo";
import Todos from "./components/Todos";
import { db } from "./firebase";

function App() {
  const [arrTodos, setArrTodos] = useState([]);
  // Add Todos firebase

  // Get todos tu firebase

  useEffect(() => {
    const result = query(collection(db, "todos"));
    const unSub = onSnapshot(result, (querySnapshot) => {
      let arrTodos: any = [];
      querySnapshot.forEach((doc) => {
        arrTodos.push({ ...doc.data(), id: doc.id });
      });
      setArrTodos(arrTodos);
    });
    return () => unSub();
  }, []);

  // Delete firebase
  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "todos", id));
  };
  // update firebase
  const handleEdit = async (todo: Todo, title: string) => {
    await updateDoc(doc(db, "todos", todo.id), { text: title });
  };
  const toggleComplete = async (todo: Todo) => {
    console.log({ todo });
    await updateDoc(doc(db, "todos", todo.id), { checked: !todo.checked });
  };
  return (
    <div className="App">
      <AppTodo />
      {/* render todos ra giao dien */}

      {arrTodos.map((todo: Todo) => {
        return (
          <li key={todo.id}>
            <Todos
              todo={todo}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              toggleComplete={toggleComplete}
            />
          </li>
        );
      })}
    </div>
  );
}

export default App;

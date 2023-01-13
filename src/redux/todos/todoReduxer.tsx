import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import { Todo } from "../../components/AppTodo";
import { db } from "../../firebase";
import { AppDispatch } from "../configStore";

export interface TodoState {
  arrTodos: Todo[];
}
const initialState: TodoState = {
  arrTodos: [],
};

const todoReduxer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setArrTodosReducer: (state: TodoState, action: PayloadAction<Todo[]>) => {
      state.arrTodos = action.payload;
    },
    deleteTodo: (state: TodoState, action: PayloadAction<Todo[]>) => {
      state.arrTodos = action.payload;
    },
  },
});

export const { setArrTodosReducer, deleteTodo } = todoReduxer.actions;

export default todoReduxer.reducer;

// kết nối firebased để lấy dữ liệu
export const getArrTodos = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = query(collection(db, "todos"));
      const unSub = onSnapshot(result, (querySnapshot) => {
        let arrTodos: any = [];
        querySnapshot.forEach((doc) => {
          arrTodos.push({ ...doc.data(), id: doc.id });
        });
        dispatch(setArrTodosReducer(arrTodos));
      });
    } catch (e) {
      console.log({ e });
    }
  };
};
// delete todos
export const deleteTodos = (id: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      await deleteDoc(doc(db, "todos", id));
    } catch (e) {
      console.log(e);
    }
  };
};
//update todo

export const handleEdit = async (todo: Todo, title: string) => {
  await updateDoc(doc(db, "todos", todo.id), { text: title });
};

// update firebase

export const toggleComplete = async (todo: Todo) => {
  console.log({ todo });
  await updateDoc(doc(db, "todos", todo.id), { checked: !todo.checked });
};

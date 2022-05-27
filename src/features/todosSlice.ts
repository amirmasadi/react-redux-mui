import { createSlice } from "@reduxjs/toolkit";

interface ITask {
  task: string;
  priority: string;
  tags: string[];
  isComplete: boolean;
  _id: string;
}

type ITasks = {
  value: ITask[];
};

const savedTodos: ITask[] = JSON.parse(localStorage.getItem("todos") || "");

const initialState: ITasks = {
  value: savedTodos || [
    {
      task: "Lorem ipsum dolor sit amet",
      priority: "low",
      tags: ["example", "low"],
      isComplete: false,
      _id: 123,
    },
    {
      task: "add a new todo, dont forget to add tags to find them more easily",
      priority: "high",
      tags: ["high"],
      isComplete: false,
      _id: 321,
    },
    {
      task: "consectetur adipiscing elit",
      priority: "normal",
      tags: ["normal"],
      isComplete: true,
      _id: 456,
    },
  ],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state: ITasks, action: {payload: ITask}) => {
      state.value.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state.value));
    },
    deleteTask: (state, action) => {
      state.value = state.value.filter((task) => task._id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.value));
    },
    completeTask: (state, action) => {
      state.value.forEach((task) => {
        if (task._id === action.payload) {
          task.isComplete = !task.isComplete;
          localStorage.setItem("todos", JSON.stringify(state.value));
        }
      });
    },
    editTask: (state, action) => {
      state.value.forEach((task) => {
        if (task._id === action.payload.id) {
          task.task = action.payload.editedTask;
          localStorage.setItem("todos", JSON.stringify(state.value));
        }
      });
    },
  },
});

export const { addTask, deleteTask, completeTask, editTask } =
  todosSlice.actions;
export default todosSlice.reducer;

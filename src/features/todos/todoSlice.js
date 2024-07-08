import { createSlice,nanoid } from "@reduxjs/toolkit";

  const loadFromLocalStorage = () => {
    try {
      const localtodos = localStorage.getItem('todos');
      if (localtodos === null) return undefined;
      return JSON.parse(localtodos);
    } catch (e) {
      console.warn("Could not load state", e);
      return undefined;
    }
  };
  
const initialState = {
    todos: loadFromLocalStorage() || [{
        id:1,
        text:"First Todo"
    }]
};

//   localStorage.setItem('todos',JSON.stringify(initialState.todos));

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo ={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
            localStorage.setItem('todos',JSON.stringify(state.todos))
        },
        removeTodo:(state,action)=>{
           state.todos= state.todos.filter((todo)=>todo.id !== action.payload)
           localStorage.setItem('todos',JSON.stringify(state.todos))
        }
    }
});
export const {addTodo,removeTodo} = todoSlice.actions;
export default todoSlice.reducer;
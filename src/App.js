import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { addTodo } from './features/todos/todoSlice';
import Todolist from './todolist';
function App() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const addTodoSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput('');
  }
  return (
    <div className='bg-slate-800 text-white h-screen'>
      <div className='block mx-auto text-center p-2 sm:w-11/12 lg:w-2/3'>
        <div className='font-bold mx-auto text-4xl  lg:text-5xl'>Add Todo</div>
        <form className='form-box' onSubmit={addTodoSubmit}>
          <input type='text' className='input-box' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Add Todos' />
          <button type='submit' className='bg-indigo-700 rounded-md p-1 w-12 basis-20 font-bold'>Add</button>
        </form>
      </div>
      <Todolist />
    </div>
  );
}

export default App;

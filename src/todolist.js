import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from './features/todos/todoSlice';
function Todolist() {
    const todos = useSelector(state => state.todos);
    const dispatch =useDispatch();
    return (
        <div className='mt-10 mx-5'>
            {todos.map((todo) => (
                <li className='todo-item' key={todo.id}> <div className='truncate pr-1'> {todo.text}</div>
                    <div className='basis-4 ms-auto cursor-pointer' onClick={()=>dispatch(removeTodo(todo.id))}><i class="fa-regular fa-trash-can fa-lg" style={{ color: "#de2626" }}></i>
                    </div></li>
            ))}
        </div>
    );
}
export default Todolist;
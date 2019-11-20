import React, { useContext } from 'react';
import { Todo } from '../models/Todo';
import { TodoContext } from './TodoShell';

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
    
    const { dispatch } = useContext(TodoContext);
    
    const handleToggle = () => {
        dispatch({type: 'toggle', id: todo.id});
    };

    const handleDestroy = () => {
        dispatch({type: 'destroy', id: todo.id});
    };

    return (
        <li className={ `${todo.completed ? 'completed' : ''}`}>
          <div className="view">
            <input className="toggle" type="checkbox" checked={todo.completed} onChange={handleToggle} />
            <label>{ todo.title }</label>
            <button onClick={handleDestroy} className="destroy"></button>
          </div>
          <input className="edit" value="Rule the web" />
        </li>
    );
};

export default TodoItem;

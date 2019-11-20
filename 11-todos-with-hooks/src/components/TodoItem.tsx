import React from 'react';
import { Todo } from '../models/Todo';
import { useDispatch } from 'react-redux';

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
    
    const dispatch  = useDispatch();

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
          <input className="edit" />
        </li>
    );
};

export default TodoItem;

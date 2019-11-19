import React, { useState } from 'react';
import Todo from './state/Todo';

const TodoItem: React.FC<{ todo: Todo, onToggle: () => void, onDestroy: () => void }> = ({ todo, onToggle, onDestroy }) => {
    
    const [editMode, setEditMode] = useState(false);
    const [editTitle, setEditTitle] = useState(todo.title);

    const handleToggle = () => { onToggle() };

    return (
    <li className={ `${todo.completed ? 'completed' : ''} ${editMode ? 'editing' : ''}` }>
        {/* <!-- List items should get the className `editing` when editing and `completed` when marked as completed --> */}
        <div className="view">
            <input className="toggle" type="checkbox" onChange={handleToggle} checked={todo.completed} />
            <label onDoubleClick={() => { setEditMode(true) }}>{ todo.title }</label>
            <button onClick={onDestroy} className="destroy"></button>
        </div>
        <input className="edit" defaultValue={editTitle} onBlur={() => setEditMode(false) } />
    </li>
)};

export default TodoItem;

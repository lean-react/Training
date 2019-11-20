import React, { useState } from 'react';
import Todo from './state/Todo';

const TodoItem: React.FC<{ todo: Todo, onToggle: () => void, onDestroy: () => void }> = ({ todo, onToggle, onDestroy }) => {
    
    const [editMode, setEditMode] = useState(false);
    const [editTitle, setEditTitle] = useState(todo.title);

    const handleToggle = () => { onToggle() };

    const beginEdit = () => {
        setEditMode(true);
        setEditTitle(todo.title);
    }

    const commitEdit = () => {
        setEditMode(false);
        // Trigger update auf neueun Title
    }

    return (
    <li className={ `${todo.completed ? 'completed' : ''} ${editMode ? 'editing' : ''}` }>
        {/* <!-- List items should get the className `editing` when editing and `completed` when marked as completed --> */}
        <div className="view">
            <input className="toggle" type="checkbox" onChange={handleToggle} checked={todo.completed} />
            <label onDoubleClick={beginEdit}>{ todo.title }</label>
            <button onClick={onDestroy} className="destroy"></button>
        </div>
        <input className="edit" value={editTitle} onBlur={commitEdit} onChange={e => setEditTitle(e.currentTarget.value)} />
    </li>
)};

export default TodoItem;

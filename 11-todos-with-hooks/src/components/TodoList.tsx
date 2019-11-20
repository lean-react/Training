import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodoContext } from './TodoShell';

const TodoList = () => {
    const {state } = useContext(TodoContext);

    return (
        <ul className="todo-list">
        { state.todos.map( t => 
            <TodoItem todo={t} key={t.id}  />    
        )}
        
      </ul>
    );
};

export default TodoList;

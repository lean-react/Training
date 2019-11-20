import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import { TodoState } from '../state/reducer';
import { Todo } from '../models/Todo';

const TodoList = () => {
    const todos = useSelector<TodoState, Todo[]>(s => s.todos);

    return (
        <ul className="todo-list">
        { todos.map( t => 
            <TodoItem todo={t} key={t.id}  />    
        )}
        
      </ul>
    );
};

export default TodoList;

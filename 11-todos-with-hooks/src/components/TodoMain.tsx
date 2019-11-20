import React from 'react';
import TodoList from './TodoList';
import { useSelector } from 'react-redux';
import { TodoState } from '../state/reducer';
import { Todo } from '../models/Todo';

const TodoMain = () => {
    const todos = useSelector<TodoState, Todo[]>(s => s.todos);

    return (
        <section className={ `main ${todos.length === 0 ?  'hidden' : '' }` }>
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <TodoList />
    </section>
    );
};

export default TodoMain;

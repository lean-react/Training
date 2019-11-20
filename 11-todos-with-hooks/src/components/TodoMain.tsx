import React from 'react';
import TodoList from './TodoList';
import { useTodos } from '../state/hooks';

const TodoMain = () => {
    const todos = useTodos();
    return (
        <section className={ `main ${todos.length === 0 ?  'hidden' : '' }` }>
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <TodoList />
    </section>
    );
};

export default TodoMain;

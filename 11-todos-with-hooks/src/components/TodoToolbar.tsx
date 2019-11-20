import React, { useContext, useMemo, useState } from 'react';
import { TodoContext } from './TodoShell';
import { useTodos } from '../state/hooks';

const TodoToolbar = () => {

    // const { state } = useContext(TodoContext);
    const todos = useTodos();

    const activeCount = useMemo(() => todos.reduce((count,t) => t.completed ? count : count + 1, 0), todos);

    return (
        <footer className={ `footer ${todos.length === 0 ?  'hidden' : '' }` }>
      <span className="todo-count"><strong>{activeCount}</strong> item left</span>
      <ul className="filters">
        <li>
          <a className="selected" href="#/">All</a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
    );
};

export default TodoToolbar;

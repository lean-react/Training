import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { TodoState } from '../state/reducer';
import { Todo } from '../models/Todo';

const TodoToolbar = () => {

    const todos = useSelector<TodoState, Todo[]>(s => s.todos);

    const activeCount = useMemo(() => todos.reduce((count,t) => t.completed ? count : count + 1, 0), [todos]);

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

import React, { useReducer } from 'react';
import TodoInput from './TodoInput';
import TodoMain from './TodoMain';
import TodoToolbar from './TodoToolbar';
import todosReducer, { TodoState, getTodos } from '../state/reducer';
import Action from '../state/actions';
import { VisibilityFilter } from '../models/Todo';

export type CtxType = {
    state: TodoState,
    dispatch: (action: Action) => void
};

export const TodoContext = React.createContext<CtxType>({ 
    state: { todos: [], filter: VisibilityFilter.All}, 
    dispatch: (action: Action) => {}
});

const TodoShell = () => {

    const [state, dispatch] = useReducer(todosReducer, { todos: getTodos(), filter: VisibilityFilter.All })

    return (
        <TodoContext.Provider value={ {state, dispatch} }>
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <TodoInput />
            </header>
            <TodoMain />
            <TodoToolbar />
        </section>
        </TodoContext.Provider>
    );
};

export default TodoShell;

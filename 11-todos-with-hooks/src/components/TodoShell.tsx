import React from 'react';
import TodoInput from './TodoInput';
import TodoMain from './TodoMain';
import TodoToolbar from './TodoToolbar';
import todosReducer from '../state/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';



const store = createStore(todosReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    );

const TodoShell = () => {

    return (
        <Provider store={store}>
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <TodoInput />
            </header>
            <TodoMain />
            <TodoToolbar />
        </section>
        </Provider>
    );
};

export default TodoShell;

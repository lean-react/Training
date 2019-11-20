import React, { useState, useEffect, useReducer, useDebugValue } from 'react';
import Todo from '../model/Todo';

const msgReducer = (state: { msg: string, called: number }, newMsg: string ) => {
    return { msg: newMsg, called: state.called + 1 };
}

const todosReducer = ( state: { todos: string[] }, action: { type: string, payload: string }): { todos: string[] } => {

    switch(action.type) {
        case 'create':
                return { todos: [...state.todos, action.payload ]};
            break;

        default:
            return state;
    }
}

const TodoShell: React.FC<{}> = (props) => {

    const [msg, dispatch ] = useReducer(msgReducer, { msg: 'Schon Mittag?', called: 0});


    const [filter, setFilter] = useState('');
    useDebugValue(filter === '' ? 'Alle' : filter );
    
    const [todos, setTodos] = useState([{id: 1, title: '', completed: false}] as Todo[]);
    const [activeCount, setActiveCount] = useState(0);
    const clearTodos = () => {
        setTodos([]);
        dispatch('Yep');
    }

    useEffect(() => {
        // Code executed after mount (once)
        // Code executed after todos - Statechange (aber nicht auf filter Statechange)
        console.log('Effect call');
        setActiveCount(todos.reduce((count,t) => t.completed ? count : count + 1, 0));
    
        return () => {
            // Code executed on unmout
            // save todos
        }
    }, [todos]);

    return (
        <div className="container">
            <button  onClick={clearTodos}>Clear Todos</button>
            <h2>Todoliste {filter} {msg.msg} {msg.called}</h2>
            <div className="toolbar">
                Anzahl Todos: {todos.length},
                noch nicht erledigt: {activeCount}
                <div>
                    <button onClick={() => setFilter('')}>All</button>
                    <button onClick={() => setFilter('(unerledigte)')}>Active</button>
                    <button onClick={() => setFilter('(erledigte)')}>Completed</button>
                </div>
            </div>
        </div>
    );
}

export default TodoShell;

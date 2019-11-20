import React, {KeyboardEvent, useContext} from 'react';
import { TodoContext } from './TodoShell';
import { createTodo } from '../state/actions';

const TodoInput = () => {

    const { dispatch } = useContext(TodoContext);

    const handleKey = (ev: KeyboardEvent<HTMLInputElement>) => {
        if (ev.key === 'Enter' ) {
            const title = ev.currentTarget.value.trim();
            if (title.length > 0) {
                dispatch(createTodo(title));
            }
            ev.currentTarget.value = '';
        }
    };

    return (
        <input onKeyUp={handleKey} className="new-todo" placeholder="What needs to be done?" autoFocus />
    );
};

export default TodoInput;

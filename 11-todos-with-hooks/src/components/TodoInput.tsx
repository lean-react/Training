import React, {KeyboardEvent} from 'react';
import { createTodo } from '../state/actions';
import { useDispatch } from 'react-redux';

const TodoInput = () => {

    const dispatch = useDispatch()

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

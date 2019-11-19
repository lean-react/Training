import React from 'react';

const TodoInput: React.FC<{ onCreateTodo?: (title: string) => void }> = (props) => {

    function createTodo(ev: React.KeyboardEvent<HTMLInputElement>) {
        if( ev.key === 'Enter') {
            const title = ev.currentTarget.value.trim();
            if (title.length > 0) {
                props.onCreateTodo && props.onCreateTodo(title);
            }
            ev.currentTarget.value = '';
        }
    }

    return <input onKeyUp={createTodo} className="new-todo" placeholder="What needs to be done?" autoFocus />;

};

export default TodoInput;

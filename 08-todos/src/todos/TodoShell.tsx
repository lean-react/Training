import React from 'react';

import TodoItem from './TodoItem';
import TodoState from './state/TodoState';
import VisibilityFilter from './state/VisibilityFilter';
import { LocalStoreService } from './state/LocalStoreService';
import Todo from './state/Todo';
import TodoInput from './TodoInput';

const store = new LocalStoreService();

export default class TodoShell extends React.Component<{}, TodoState> {

    // Initial state
    state = { todos: [] as Todo[], filter: VisibilityFilter.All };

    async componentDidMount() {
        const todos = await store.getAll();
        this.setState({ todos });
    }

    get activeCount(): number {
        return this.state.todos.reduce( (count, t) => t.completed ? count : count + 1, 0);
    }

    createTodo(title: string) {
        store.create(title).then(todo => this.setState({
            todos: [ ...this.state.todos, todo]
        }));
    }

    async toggleTodo(todo: Todo) {
        const updatedTodo = await store.update(todo.id, { completed: !todo.completed });
        this.setState({ todos: this.state.todos.map(t => t.id === todo.id ? updatedTodo : t )})
    }

    destroyTodo(id: number) {
        store.remove(id).then( () => {
            this.setState({ todos: this.state.todos.filter(t => t.id !== id )});
        } );
    }

    render() {
       return (<section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <TodoInput onCreateTodo={(title) => this.createTodo(title)} />
            </header>
            {/* <!-- This section should be hidden by default and shown when there are todos --> */}
            { this.state.todos.length > 0 && (
                <section className="main">
                    <input id="toggle-all" className="toggle-all" type="checkbox" />
                    <label htmlFor="toggle-all">Mark all as complete</label>
                    <ul className="todo-list">
                        { this.state.todos.map( t => 
                            <TodoItem key={t.id} todo={t} 
                                onToggle={this.toggleTodo.bind(this, t)}
                                onDestroy={() => { this.destroyTodo(t.id) }}
                            /> 
                        )}
                    </ul>
                </section>) 
            }
            {/* <!-- This footer should hidden by default and shown when there are todos --> */}
            <footer className="footer">
                {/* <!-- This should be `0 items left` by default --> */}
        <span className="todo-count"><strong>{this.activeCount}</strong> item left</span>
                {/* <!-- Remove this if you don't implement routing --> */}
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
                {/* <!-- Hidden if no completed items are left ↓ --> */}
                <button className="clear-completed">Clear completed</button>
            </footer>
        </section>);
    }
}
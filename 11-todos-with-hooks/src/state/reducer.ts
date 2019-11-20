import { Todo, VisibilityFilter } from "../models/Todo";
import Action from "./actions";

export interface TodoState {
    todos: Todo[];
    filter: VisibilityFilter;
}

export const getTodos = (): Todo[] => JSON.parse(localStorage.getItem('todos') || '[]');
const getNextId = (): number => JSON.parse(localStorage.getItem('nextId') || '1');
const saveTodos = (todos: Todo[]) => localStorage.setItem('todos', JSON.stringify(todos));
const saveNextId = (id: number) => localStorage.setItem('nextId', JSON.stringify(id));

const todosReducer = (state: TodoState, action: Action): TodoState => {
    switch (action.type) {
        case 'create':
            const nextId = getNextId();
            const todo: Todo = { id: nextId, title: action.title, completed: false };
            const todos = [ ...state.todos, todo ];
            saveTodos(todos);
            saveNextId(nextId+1);

            return { ...state, todos };
    
        case 'toggle': {
            const todos = state.todos.map(t => t.id != action.id ? t : { ...t, completed: !t.completed } );
            saveTodos(todos);
            return { ...state, todos };
        }

        case 'update': {
            const todos = state.todos.map(t => t.id != action.id ? t : { ...t, title: action.title } );
            saveTodos(todos);
            return { ...state, todos };
        }

        case 'destroy': {
            const todos = state.todos.filter(t => t.id != action.id );
            saveTodos(todos);
            return { ...state, todos };
        }
 
        default:
            return state;
    }
}

export default todosReducer;


export interface CreateAction {
    type: 'create';
    title: string;
}

export interface ToggleAction {
    type: 'toggle';
    id: number;
}

export interface UpdateTitleAction {
    type: 'update';
    title: string;
    id: number;
}

export interface DestroyAction {
    type: 'destroy';
    id: number;
}

type Action =
    CreateAction | ToggleAction | UpdateTitleAction | DestroyAction;

export function createTodo(title: string): CreateAction { return { type: 'create', title } }

export default Action; 

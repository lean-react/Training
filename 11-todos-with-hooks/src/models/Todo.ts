
export interface Todo {
    id: number;
    title: string;
    completed: boolean;
};

export enum VisibilityFilter {
    All,
    Active,
    Completed
};

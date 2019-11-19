import Todo from "./Todo";

export class LocalStoreService {

    async getAll(): Promise<Todo[]> {
      return this.loadTodos();
    }
  
    async create(title: string): Promise<Todo> {
      const newTodo: Todo = { id: this.generateId(), title, completed: false };
  
      const todos  = this.loadTodos();
      todos.push(newTodo);
      this.saveTodos(todos);
  
      return newTodo;
    }
  
    async update(id: number, changes: { title?: string; completed?: boolean; }): Promise<Todo> {
      const todos = this.loadTodos();
  
      const todo = todos.find(t => t.id === id) as Todo;
      Object.assign(todo, changes);
      this.saveTodos(todos);
  
      return todo;
    }
  
    async remove(id: number): Promise<void> {
      const todos = this.loadTodos();
  
      const ix = todos.findIndex(t => t.id === id);
      todos.splice(ix, 1);
      this.saveTodos(todos);
    }
  
    private loadTodos(): Todo[] {
      return JSON.parse(localStorage.todos || '[]');
    }
  
    private saveTodos(todos: Todo[]) {
        localStorage.todos = JSON.stringify(todos);
    }
  
    private generateId(): number {
      let id = JSON.parse(localStorage.nextId || '1');
      localStorage.nextId = id + 1;
      return id;
    }
  }

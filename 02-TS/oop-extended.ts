
interface Loggable {
    log(): string;
}

class Demo implements Loggable {
    
    log(): string {
        return 'Demo';
    }

}

interface Todo {
    id: number;
    title: string;
    completed: boolean;
    priority?: number;
}

const todos: Todo[] = [];
todos.push({ id: 17, title: 'Yep', completed: true, priority: 17 });

enum Sichtbarkeit {
    Alle,
    Unerledigt,
    Erledigt
};

const filter: Sichtbarkeit = Sichtbarkeit.Alle;

type Alias = { num: number }
interface Interface {
    num: number;
}

function fn(args: Alias) {
    console.log(args.num);
}
function fn2(args: Interface) {
    console.log(args.num);
}



interface CreateAction{
    type: 'create';
    title: string;
}
interface ToggleAction {
    type: 'toggle';
     id: number;
}
interface UpdateAction  {
    type: 'update';
        id: number;
        title: string;
}

type Actions = CreateAction | ToggleAction | UpdateAction;

function handleAction(action: Actions) {
    switch (action.type) {
        case 'create':
            console.log('Create a new todo tiwh title', action.title);
            break;
    
        case 'toggle':
            console.log('Toggling todo', action.id);
            break;

        case 'update':
                console.log('Updating todo tiwh new title', action.id, action.title);
                break;
        
        default:
            break;
    }
}

handleAction(new CreateAction('Pause'));






















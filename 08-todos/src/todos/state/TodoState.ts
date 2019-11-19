import Todo from "./Todo";
import VisibilityFilter from "./VisibilityFilter";

type TodoState = {
    todos: Todo[],
    filter: VisibilityFilter
}

export default TodoState;
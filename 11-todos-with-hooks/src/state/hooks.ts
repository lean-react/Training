import { TodoState } from "./reducer";
import { useContext } from "react";
import { TodoContext } from "../components/TodoShell";

// export const useTodoState = (selector: <T>(state: TodoState) => T) => {
//     const {state} = useContext(TodoContext);
//     return selector(state);
// };

export const useTodos = () => {
    const {state} = useContext(TodoContext);
    return state.todos;
}
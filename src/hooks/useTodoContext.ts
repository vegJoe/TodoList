import { ITodoContext } from "../interfaces"
import { useOutletContext } from "react-router-dom";

export function useTodoContext(): ITodoContext {
    return useOutletContext<ITodoContext>();
}
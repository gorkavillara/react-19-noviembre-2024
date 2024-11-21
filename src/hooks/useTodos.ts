import { use } from "react"
import { TodoContext } from "../contexts/TodoContextProvider"

export const useTodos = () => {
    const { todos } = use(TodoContext)

    return { todos }
}
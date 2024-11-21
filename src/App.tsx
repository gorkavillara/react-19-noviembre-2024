import "./App.css"
import TodoList from "./components/TodoList"
import TodoContextProvider from "./contexts/TodoContextProvider"

const App = () => {
  return (
    <TodoContextProvider>
      <TodoList />
    </TodoContextProvider>
  )
}

export default App

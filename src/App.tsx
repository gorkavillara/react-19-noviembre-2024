import "./App.css"
import TodoList from "./components/TodoList"

const App = () => {
  // const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    // <div style={{ backgroundColor: isDarkMode ? "#000" : "#fff" }}>
      // <h2 style={{ color: isDarkMode ? "#fff" : "#000" }}>Este es el título</h2>
      // <Settings isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    // </div>
    <TodoList />
  )
}

export default App

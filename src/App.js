import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="App">
      <h1>Hello from App</h1>
      <TodoInput />
      <TodoList />
    </div>
  )
}

export default App

import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="App container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">todo input</h3>
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [items, setItems] = useState([])
  const [id, setId] = useState(uuidv4())
  const [name, setName] = useState('')
  const [editItem, setEditItem] = useState(false)

  const handleChange = (e) => {
    const { value } = e.target
    setName(value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const newId = uuidv4()
    setId(newId)
    const newItem = { id: id, name: name }
    setItems([...items, newItem])
    setName('')
    setEditItem(false)
  }
  const clearList = () => {
    setItems([])
  }
  const handleDelete = (id) => {
    const filteredItems = items.filter((item) => {
      return item.id !== id
    })
    setItems(filteredItems)
  }
  const handleEdit = (id) => {
    const filteredItems = items.filter((item) => {
      return item.id !== id
    })
    const selectedItem = items.find((item) => item.id === id)
    setName(selectedItem.name)
    setItems(filteredItems)
    setEditItem(true)
  }

  return (
    <div className="App container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">todo input</h3>
          <TodoInput
            item={name}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            editItem={editItem}
          />
          <TodoList
            items={items}
            clearList={clearList}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  )
}

export default App

import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete } = this.props
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>
        {items.map((item) => {
          return (
            <TodoItem item={item} key={item.id} handleDelete={handleDelete} />
          )
        })}

        <button
          className="btn btn-danger btn-block text-capitalize mt-5"
          type="button"
          onClick={clearList}
        >
          clear list
        </button>
      </ul>
    )
  }
}

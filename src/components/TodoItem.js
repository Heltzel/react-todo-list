import React, { Component } from 'react'
import { FaPen } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'

export default class TodoItem extends Component {
  render() {
    const { item, handleDelete, handleEdit } = this.props
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{item.name}</h6>
        <div className="todo-icon">
          <span
            className="mx-2 text-success"
            onClick={() => handleEdit(item.id)}
          >
            <FaPen />
          </span>
          <span
            className="mx-2 text-danger"
            onClick={() => handleDelete(item.id)}
          >
            <FaTrash />
          </span>
        </div>
      </li>
    )
  }
}

import React, { Component } from 'react'
import { FaBook } from 'react-icons/fa'

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit } = this.props
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <FaBook />
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add a todo item"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-block mt-3 btn-primary" type="submit">
            Add Item
          </button>
        </form>
      </div>
    )
  }
}

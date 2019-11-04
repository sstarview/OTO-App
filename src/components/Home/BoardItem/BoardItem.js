import React, { Component } from "react";
import "./BoardItem.scss";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import uuid from "uuid";

const Container = styled.div`
  border: 1px solid black;
  border-radius: 1px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: #ececec;
  display: flex;
  flex-direction: column;
`;

export default class BoardItem extends Component {
  state = {
    todos: [],
    todo: "",
    todoId: uuid()
  };

  handleChange = e => {
    this.setState({
      todo: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newTodo = {
      todoTitle: this.state.todo,
      id: this.state.todoId
    };
    const updatedTodo = [...this.state.todos, newTodo];
    this.setState({
      todos: updatedTodo,
      todo: "",
      todoId: uuid()
    });
  };

  handleDelete = id => {
    const filteredItems = this.state.todos.filter(item => item.id !== id);
    console.log(filteredItems);
    this.setState({
      todos: filteredItems
    });
  };

  render() {
    return (
      <Draggable
        draggableId={this.props.title.boardId}
        index={this.props.index}
      >
        {provided => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <h3>{this.props.title.title}</h3>
            <form onSubmit={this.handleSubmit}>
              <input
                onChange={this.handleChange}
                type="text"
                placeholder="Add Todo Item"
                value={this.state.todo}
              />
              <button disabled={this.state.todo ? false : true} type="submit">
                Add
              </button>
            </form>
            {this.state.todos.map(item => {
              return (
                <div className="todo-list">
                  <ul>
                    <li
                      onClick={() => {
                        this.handleDelete(item.id);
                      }}
                      key={item.id}
                    >
                      {item.todoTitle}
                    </li>
                  </ul>
                </div>
              );
            })}
          </Container>
        )}

        {/* <div className="board-item">
          aa
        </div> */}
      </Draggable>
    );
  }
}

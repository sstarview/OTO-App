import React, { Component } from "react";
import "./Home.scss";
import uuid from "uuid";
import BoardInput from "./BoardInput/BoardInput";
import BoardList from "./Board/BoardList";
import { DragDropContext } from "react-beautiful-dnd";

export default class Home extends Component {
  state = {
    boards: [],
    board: "",
    boardId: uuid(),
    showboard: false,
    drop: "one"
  };

  handleChange = e => {
    this.setState({
      board: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newBoard = {
      title: this.state.board,
      boardId: this.state.boardId
    };
    const updatedBoard = [...this.state.boards, newBoard];
    this.setState({
      boards: updatedBoard,
      board: "",
      boardId: uuid()
    });
  };

  onDragEnd = result => {
    //list
  };
  render() {
    return (
      <div className="home">
        <h3>Add your board</h3>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <BoardInput
            board={this.state.board}
            boardId={this.state.boardId}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <BoardList boards={this.state.boards} drop={this.state.drop} />
        </DragDropContext>
      </div>
    );
  }
}

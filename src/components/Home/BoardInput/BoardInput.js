import React, { Component } from "react";
// import styled from "styled-components";
import "./BoardInput.scss";

export default class BoardInput extends Component {
  render() {
    const { board, handleSubmit, handleChange } = this.props;
    return (
      <form className="board-input" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Board"
          value={board}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

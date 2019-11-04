import React, { Component } from "react";

export default class BoardInput extends Component {
  render() {
    const { board, handleSubmit, handleChange } = this.props;
    return (
      <form onSubmit={handleSubmit}>
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

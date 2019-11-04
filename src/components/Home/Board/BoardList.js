import React, { Component } from "react";
import "./BoardList.scss";
import BoardItem from "../BoardItem/BoardItem";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import "./BoardList";

const List = styled.div`
  max-width: 100%;
  margin-top: 10px;
  /* background-color: #fff; */
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-gap: 10px;
  text-align: center;
`;

export default class BoardList extends Component {
  render() {
    const { boards } = this.props;
    return (
      <div className="board-list">
        <h3>Your Board</h3>
        <Droppable droppableId={this.props.drop}>
          {provided => (
            <List ref={provided.innerRef} {...provided.droppableProps}>
              {boards.map((item, index) => (
                <BoardItem key={item.boardId} title={item} index={index} />
              ))}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </div>
    );
  }
}

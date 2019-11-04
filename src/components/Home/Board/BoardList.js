import React, { Component } from "react";
import "./BoardList.scss";
import BoardItem from "../BoardItem/BoardItem";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const List = styled.div`
  text-transform: capitalize;
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

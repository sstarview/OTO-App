import React, { Component } from "react";
import "./BoardItem.scss";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: #fff;
`;

export default class BoardItem extends Component {
  render() {
    // const { title } = this.props;
    console.log(this.props);
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
          </Container>
        )}

        {/* <div className="board-item">
          
        </div> */}
      </Draggable>
    );
  }
}

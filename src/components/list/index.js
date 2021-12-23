import React from "react";
import styled from "styled-components";
import { AiOutlineDelete } from "react-icons/ai";

import { IoAddOutline } from "react-icons/io5";
import * as styles from "./styles";
import { Ticket } from "../ticket";
import { Draggable, Droppable } from "react-beautiful-dnd";

const DeleteButton = (props) => {
  return (
    <div className="listBtn" onClick={props.handleDeleteTicket}>
      <AiOutlineDelete size={25} />
    </div>
  );
};

const AddListButton = (props) => {
  return (
    <div className="listBtn" onClick={props.handleAddTicket}>
      <IoAddOutline size={25} />
    </div>
  );
};



export const ListBox = (props) => {
  function handleAddTicket() {
    props.addTicket(props.list);
  }

  function handleDeleteTicket() {
    props.deleteItem(props.list, "list");
  }

  return (
    <styles.ListDiv >
      <styles.ListHeader color={props.list.color}>
        {props.list.title}
        <styles.ButtonsRow>
          <styles.TicketCounter>
            {props.list.tickets.length}
          </styles.TicketCounter>
          <DeleteButton handleDeleteTicket={handleDeleteTicket} />
          <AddListButton handleAddTicket={handleAddTicket} />
        </styles.ButtonsRow>
      </styles.ListHeader>
      <Droppable droppableId={props.list.title}>
        {(provided, snapshot) => {
          return (
            <styles.DropZone
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
              // className="dropZone"
            >
              {props.list.tickets.map((ticket, index) => {
                return (
                  <Draggable
                    key={ticket.title}
                    index={index}
                    draggableId={ticket.title}
                  >
                    {(provided, snapshot) => {
                      return (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Ticket
                            ticket={ticket}
                            list={props.list}
                            index= {index}
                            editTicket={props.editTicket}
                            isDragging={snapshot.isDragging}
                          />
                        </div>
                      );
                    }}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </styles.DropZone>
          );
        }}
      </Droppable>
    </styles.ListDiv>
  );
};

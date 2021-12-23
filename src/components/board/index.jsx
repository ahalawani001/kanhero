import React, { useState, useEffect } from "react";
import * as styles from "./styles";
import { ListBox } from "../list";
import { IoAddOutline } from "react-icons/io5";
import * as data from "../../data";
import { DragDropContext, Droppable } from "react-beautiful-dnd";



export const ShowLists = (props) => {

  
const AddListButton = ()=>{
  return ( 
  <styles.AddListButton onClick={props.addList}>
          <IoAddOutline size={25} className="listBtn" />
          <div>Add a new list</div>
  </styles.AddListButton>
        );
}

  function handleDragEnd(data) {
    console.log(data);
    props.changeTicketStatus(data.destination, data.source, data.draggableId);
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <styles.MiddleDiv>
        {props.lists.map((list, key) => {
          return (
            <ListBox
              list={list}
              addTicket={props.addTicket}
              deleteItem={props.deleteItem}
              editTicket={props.editTicket}
            />
          );
        })}

        <AddListButton/>
       
      </styles.MiddleDiv>
    </DragDropContext>
  );
};

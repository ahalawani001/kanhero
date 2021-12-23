import React from "react";
import styled from "styled-components";
import { AiOutlineDelete } from "react-icons/ai";

import { IoAddOutline } from "react-icons/io5";
import * as styles from "./styles"
import { Ticket } from "../ticket";
import { Draggable, Droppable } from "react-beautiful-dnd";

const DeleteButton = (props)=>{
    return <div className="listBtn"
    onClick={props.handleDeleteTicket}>
<AiOutlineDelete size={25}/>

    </div>
}

const AddListButton = (props)=>{
    return <div
    className="listBtn"
     onClick={props.handleAddTicket}>
        <IoAddOutline size={25} />
    </div>
}





export const ListBox =(props)=>{

    function handleAddTicket(){
        props.addTicket(props.list);
    }


    function handleDeleteTicket(){
        props.deleteItem(props.list, 'list');
    }

    return(
    <styles.ListDiv>
    <styles.ListHeader>
       {props.list.title}
        <styles.ButtonsRow>
        <DeleteButton handleDeleteTicket={handleDeleteTicket}/>
        <AddListButton handleAddTicket={handleAddTicket}/>
        </styles.ButtonsRow>
    </styles.ListHeader>
    <Droppable droppableId={props.list.id}>
        {(provided)=>{
            return (
                <div ref={provided.innerRef}
                {...provided.droppableProps}
                className="dropZone"
                >
    {props.list.tickets.map((ticket, index)=>{
        return <Draggable key ={ticket.id} index={index} draggableId={ticket.id}>
            {(provided)=>{
                return(
                    <div 
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  
                    >
                   <Ticket ticket={ticket} editTicket={props.editTicket} />
                    </div>
                )
            }}
        </Draggable>
       
    })}
    {provided.placeholder}
 </div>
 )
        }}
    </Droppable>
    


        
    </styles.ListDiv>)

}
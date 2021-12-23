import React,{useState, useEffect} from "react";
import * as styles from "./styles"
import { ListBox } from "../list";
import styled from "styled-components";
import { IoAddOutline } from "react-icons/io5";
import * as data from "../../data"
import { DragDropContext, Droppable } from "react-beautiful-dnd";


const AddListButton = styled.div`
min-width: 300px;
height: 39px;   
${'' /* border-top: 4px solid white;     */}
${'' /* background-color: red;  */}
display: felx;
flex-direction: row;
align-items:center;
background-color: rgb(43, 52, 59);
opacity: 0.6;
padding: 10px;
text-overflow: ellipsis;
line-height: 1.3;
border-radius:4px;
box-shadow: 2px 1px 4px #171b1f; 
&:hover{
    cursor:pointer;
    opacity:1;
}

`;



export const ShowLists=(props)=>{
    function handleDragEnd(data){
        console.log(data);
        props.changeTicketStatus(data.destination, data.source, data.draggableId);
    }

    return<DragDropContext onDragEnd={handleDragEnd}>
     <styles.MiddleDiv>
    {props.lists.map((list, key)=>{
        return <ListBox list={list} addTicket = {props.addTicket} deleteItem={props.deleteItem} editTicket ={props.editTicket}/>
    })}
    <AddListButton onClick={props.addList}> <IoAddOutline size={25} className="listBtn"/> <div>Add a new list</div></AddListButton>
    </styles.MiddleDiv>
    </DragDropContext>
}
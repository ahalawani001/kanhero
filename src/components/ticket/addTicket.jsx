import react, { useState, useRef } from "react";
import styled from "styled-components";
import { ClosePageButton } from "../common";
import { v4 } from "uuid";

const AddTicketDiv = styled.div`
position: relative;
width: 700px;
height:420px;
border-radius: 10px;
background-color: #1e272e;
`;




export const AddNewTicketForm = (props)=>{
    console.log("list ", props.list)
    const titleRef = useRef();
    const descriptionRef = useRef();

    function submitHandler(event){
        event.preventDefault();

        const newTitle = titleRef.current.value;
        const newDescription = descriptionRef.current.value;

        let ticket = {
            id: "T"+v4(),
            title: newTitle,
            description: newDescription
        }
        
        props.addTicket(ticket);
        props.closeForm();
    }


    return <div className="customBackdrop">
    <AddTicketDiv>
        
    <ClosePageButton closeForm = {props.closeForm}></ClosePageButton>
        <br />
        <h1>Add New Ticket</h1>
        <br />  
        <div>
            <form onSubmit={submitHandler}> 
            <div className='groupList'>
            <label htmlFor="title" placeholder="Ex: All tasks">Ticket Title: </label>
            <input type="text"  required id = 'title' ref={titleRef}/>
            <br />
            <br />
            <br />
            
            <label htmlFor="description" placeholder="Ex: All tasks">List Description </label>
            <textarea type="text"  id = 'description' ref={descriptionRef}/>
            <br />
         
            <button className="cstmBtn">Add Ticket</button>
            </div>


            </form>
        </div>
    </AddTicketDiv>

    </div>
}
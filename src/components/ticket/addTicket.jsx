import react, { useState, useRef } from "react";
import styled from "styled-components";
import { ClosePageButton } from "../common";
import { v4 } from "uuid";
import { PrioritySelector } from "../prioritySelector";

const AddTicketDiv = styled.div`
position: relative;
width: 700px;
${'' /* height:420px; */}
border-radius: 10px;
background-color: #1e272e;
padding: 30px;
`;




export const AddNewTicketForm = (props)=>{
    const titleRef = useRef();
    const descriptionRef = useRef();
    const [taskPriority, setTaskPriority] = useState('None')

    function submitHandler(event){
        event.preventDefault();

        const newTitle = titleRef.current.value;
        const newDescription = descriptionRef.current.value;

        let ticket = {
            id: "T"+v4(),
            title: newTitle,
            priority: taskPriority,
            description: newDescription
        }
        
        props.addTicket(ticket);
        props.closeForm();
    }

    function handlePriorityChange(priority){
        console.log("We here");
        setTaskPriority(priority);
    }

   


    return <div className="customBackdrop">
    <AddTicketDiv>
        
    <ClosePageButton closeForm = {props.closeForm}></ClosePageButton>
        {/* <br />   */}
        <h1>Add New Ticket</h1>
        <div>
            <form  onSubmit={submitHandler}> 
            <div className='groupList'>
            <div className="formItem">
            <label className='formLabel' htmlFor="title" placeholder="Ex: All tasks">Title: </label>
            <input className='formInput' type="text"  required id = 'title' ref={titleRef}/>
            </div>

            <div className="formItem">
            
            
            <label htmlFor="description" placeholder="Ex: All tasks">Description: </label>
            <textarea type="text"  id = 'description' ref={descriptionRef}/></div>
            {/* <br /> */}
            <div className="formItem">
                
            <PrioritySelector priority= {taskPriority} changePriority={handlePriorityChange}/>
            </div>
         
            <button className="cstmBtn">Add Ticket</button>
            </div>


            </form>
        </div>
    </AddTicketDiv>

    </div>
}
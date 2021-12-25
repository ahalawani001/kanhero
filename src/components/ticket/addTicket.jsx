import { useState, useRef } from "react";
import { ClosePageButton } from "../common";
import { v4 } from "uuid";
import { PrioritySelector } from "../prioritySelector/";
import { AddTicketDiv } from "./style";



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
        setTaskPriority(priority);
    }

   


    return <div className="customBackdrop">
    <AddTicketDiv>
        
    <ClosePageButton closeForm = {props.closeForm}></ClosePageButton>
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
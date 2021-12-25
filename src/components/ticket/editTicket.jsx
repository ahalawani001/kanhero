import { useState } from "react";
import { ClosePageDiv } from "../common";
import { MdDeleteForever } from "react-icons/md";
import { ButtonsRow } from "../common";
import { PrioritySelector } from "../prioritySelector/";
import { EditTicketDiv } from "./style";



export const EditTicketForm= (props)=>{
    const [title, setTitle] = useState(props.ticket.title?props.ticket.title:'');
    const [description, setDescription] = useState(props.ticket.description?props.ticket.description:'');
    const [priority, setPriority] = useState(props.ticket.priority?props.ticket.priority:'None');
    
    
    function submitHandler(event){
        
        event.preventDefault();
        let newTicket ={
            index: props.index,
            ticket:  {
            id: props.ticket.id,
            title: title,
            description: description,
            priority: priority
        }
        }

        props.editTicket(newTicket);
    }

    function submitTitleOnChange (event){
        setTitle(event.target.value);
    }
    
    function submitDescriptionOnChange (event){
        setDescription(event.target.value);
    }

    
    function handlePriorityChange(priority){
        setPriority(priority);
    }
    
    return <div className="customBackdrop">
        <EditTicketDiv>
        <ClosePageDiv onClick={props.deleteTicket}>
        <MdDeleteForever size={35} color="red"/>
        </ClosePageDiv>
        <div style={{'marginTop':'20px'}}>
            <form onSubmit={submitHandler}> 
            <div className='groupList'>

            <div className="formItem">
            <label htmlFor="title" >Title: </label>
            <input type="text"   id = 'title'  value ={title} onChange={submitTitleOnChange}/>
            </div>
        <br/>
            
            <div className="formItem">
            <label htmlFor="description" >List Description </label>
            <textarea type="text"   id = 'description' onChange={submitDescriptionOnChange} value={description}/>
            </div>
    
            <div className="formItem">
            <PrioritySelector priority= {priority} changePriority={handlePriorityChange}/>
            </div>

            <ButtonsRow >
            <button className="cstmBtn" onClick={props.closeForm}>Cancel</button>
            <button className="updateBtn" >Update</button>
            </ButtonsRow>
         
            </div>

            </form>
        </div>

        </EditTicketDiv>
    </div>
}

import react, { useState, useRef } from "react";
import styled from "styled-components";
import { ClosePageDiv } from "../common";
import { MdDeleteForever } from "react-icons/md";
import { PrioritySelector } from "../prioritySelector";

const EditTicketDiv = styled.div`
position: relative;
width: 700px;
padding: 25px;
${'' /* height:400px; */}
border-radius: 10px;
background-color: #1e272e;
`;

const ButtonsRow = styled.div`
width: 95%;
display:flex;
justify-content: right;
padding-right:30px;
`;

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
        console.log("We here");
        setPriority(priority);
    }
    
    return <div className="customBackdrop">
        <EditTicketDiv>
        <ClosePageDiv onClick={props.deleteTicket}>
        <MdDeleteForever size={35} color="red"/>
        </ClosePageDiv>
        {/* <h1>Update New Ticket</h1> */}
        <div style={{'marginTop':'20px'}}>
            <form onSubmit={submitHandler}> 
            <div className='groupList'>
            <label htmlFor="title" >Ticket Title: </label>
            <input type="text"   id = 'title'  value ={title} onChange={submitTitleOnChange}/>
            <br />
            <br />
            <br />
            
            <label htmlFor="description" >List Description </label>
            <textarea type="text"   id = 'description' onChange={submitDescriptionOnChange} value={description}/>
            <br />

            <PrioritySelector priority= {priority} changePriority={handlePriorityChange}/>

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

import react, { useState, useRef } from "react";
import styled from "styled-components";
import { ClosePageDiv } from "../common";
import { MdDeleteForever } from "react-icons/md";

const EditTicketDiv = styled.div`
position: relative;
width: 700px;
height:400px;
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
    const [title, setTitle] = useState(props.ticket.title?props.ticket.title:'')
    const [description, setDescription] = useState(props.ticket.description?props.ticket.description:'')
    
    function submitHandler(event){
        
        event.preventDefault();
        let newTicket ={
            index: props.index,
            ticket:  {
            id: props.ticket.id,
            title: title,
            description: description
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
    
    return <div className="customBackdrop">
        <EditTicketDiv>
        <ClosePageDiv onClick={props.deleteTicket}>
        <MdDeleteForever size={35} color="red"/>
        </ClosePageDiv>
        <br />
        {/* <h1>Update New Ticket</h1> */}
        <br />  
        <div style={{'marginTop':'50px'}}>
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

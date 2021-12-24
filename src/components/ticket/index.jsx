import React from "react";
import * as styles from './style';

import { RiFlag2Line } from "react-icons/ri";
import { PRIORITIES } from "../prioritySelector";

export const  Ticket = (props)=>{
    function getColor()
    {
        let color= '';
        switch(props.ticket.priority){
            case'None':
                color= 'white';
                break;
            case 'Low': 
                color =  'rgb(105, 105, 255)';
                break;
            case 'Normal':
                color= 'rgb(105, 255, 120)';
                break;
            case 'High':
                color ='rgb(255, 255, 120)';
                break;
            case 'Urgent':
                color =  'rgb(255, 105, 120)'
                break;
        }
        console.log("color", props.priority)
        return color;

    }
    
    function handleEditTicket(){
        console.log("JUST CLICKET ON A TICKET")
        let activeTicket = {
            index: props.index,
            ticket: props.ticket
        }
        props.editTicket(activeTicket, props.list);
    }
    return <styles.TicketDiv onClick={handleEditTicket} isDragging={props.isDragging} listColor={props.list.color}>
        {props.ticket.title} 
        {props.ticket.priority !== 'None' && 
        <styles.PriorityBox color={getColor}> {props.ticket.priority} <RiFlag2Line color="" size={20}></RiFlag2Line></styles.PriorityBox>}

    </styles.TicketDiv>

}
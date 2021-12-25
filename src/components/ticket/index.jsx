import React from "react";
import * as styles from './style';

import { RiFlag2Line } from "react-icons/ri";

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
            default: 
                color = 'transperent'
        }
        return color;

    }
    
    function handleEditTicket(){
        let activeTicket = {
            index: props.index,
            ticket: props.ticket
        }
        props.editTicket(activeTicket, props.list);
    }

    const PriorityButton = ()=>{
        return (
            <styles.PriorityBox color={getColor}>
                 {props.ticket.priority} 
                 <RiFlag2Line color="" size={20}/>
             </styles.PriorityBox>
        )
    }

    return <styles.TicketDiv onClick={handleEditTicket} isDragging={props.isDragging} listColor={props.list.color}>
        {props.ticket.title} 
        {props.ticket.priority !== 'None' && <PriorityButton/> }
      
    </styles.TicketDiv>

}
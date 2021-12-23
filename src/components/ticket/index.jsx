import React from "react";
import * as styles from './style';

export const  Ticket = (props)=>{
    
    function handleEditTicket(){
        props.editTicket(props.ticket);
    }
    return <styles.TicketDiv onClick={handleEditTicket} isDragging={props.isDragging}>
        {props.ticket.title}
    </styles.TicketDiv>

}
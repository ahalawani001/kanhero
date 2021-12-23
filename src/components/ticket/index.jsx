import React from "react";
import * as styles from './style';

export const  Ticket = (props)=>{
    
    function handleEditTicket(){
        props.editTicket(props.ticket);
    }
    return <styles.TicketDiv onClick={handleEditTicket}>
        {props.ticket.title}
    </styles.TicketDiv>

}
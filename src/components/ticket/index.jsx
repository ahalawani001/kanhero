import React from "react";
import * as styles from './style';

export const  Ticket = (props)=>{
    
    function handleEditTicket(){
        console.log("JUST CLICKET ON A TICKET")
        let activeTicket = {
            index: props.index,
            ticket: props.ticket
        }
        props.editTicket(activeTicket, props.list);
    }
    return <styles.TicketDiv onClick={handleEditTicket} isDragging={props.isDragging}>
        {props.ticket.title}
    </styles.TicketDiv>

}
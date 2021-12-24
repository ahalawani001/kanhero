import styled from "styled-components";

export const TicketDiv = styled.div`
background-color:${props=>(props.isDragging?  `rgb(226, 224, 224)`: `rgba(226, 224, 224, 0.7)`)};
height: 30px;
max-width: 250px;
color: ${props=>(props.isDragging?  `#1e272e`: `#1e272e`)};
margin: 10px;
margin-top:20px;
 border-top: 2px solid ${props=> props.listColor};
height: 30px;;
border-radius: 5px;
font-weight: 600;
padding:${props=>(props.isDragging?  `12px`: `10px`)};

display: flex;
justify-content: space-between;
align-items:center;

text-overflow: 'ellipsis';




&:hover{
    cursor:grab;
    z-index: 10;
    opacity: 0.7;  
}
&:active{
    cursor:grabbing;
}
`;

export const PriorityBox = styled.div`
width: 75px;    
height:30px;
border-radius:5px;
background-color:${props=> props.color};
padding: 0 8px;
display:flex;
justify-content:space-between;;
align-items: center;
font-size:14px;


`;


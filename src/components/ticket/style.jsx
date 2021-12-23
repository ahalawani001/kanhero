import styled from "styled-components";

export const TicketDiv = styled.div`
background-color:${props=>(props.isDragging?  `rgb(226, 224, 224)`: `rgba(226, 224, 224, 0.7)`)};
height: 30px;
${'' /* width: 100%; */}
max-width: 250px;
color: ${props=>(props.isDragging?  `#1e272e`: `#1e272e`)};
margin: 10px;
margin-top:20px;
${'' /* box-shadow: 0px 2px 1px #000000; */}
border: 1px solid  rgba(255,255,255,0);
border-radius: 5px;
font-weight: 600;
padding:${props=>(props.isDragging?  `12px`: `10px`)};

display: flex;
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
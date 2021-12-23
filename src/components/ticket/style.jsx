import styled from "styled-components";

export const TicketDiv = styled.div`
background-color: rgba(255,255,255,0.7);
height: 30px;
${'' /* width: 100%; */}
max-width: 250px;
color:#1e272e;
margin: 10px;
margin-top:20px;
${'' /* box-shadow: 0px 2px 1px #000000; */}
border: 1px solid  rgba(255,255,255,0.7);
border-radius: 5px;
font-weight: 600;
padding:10px;

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
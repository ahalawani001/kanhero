import styled from "styled-components"

export const DropZone = styled.div`
width: 100%;
height: 635px;
max-height: 635px;
overflow-y: scroll;
background-color: ${(props) =>
  props.isDraggingOver ? `rgb(48, 57, 64)` : `transperent`};
`;

export const AddListDiv = styled.div`
position: relative;
width: 700px;
border-radius: 10px;
background-color: #1e272e;
padding:25px;
`;

export const ListDiv = styled.div`
height: 700px;
min-width: 300px;
  position: relative;
background-color: #2B343B;
margin-right: 25px;
border-radius:4px;

box-shadow: 0 -30px 30px -15px rgba(0,0,0,1);
overflow:hidden;


`;

export const ListHeader = styled.div`
height: 35px;
border-top: 4px solid ${(props) =>
    props.color };;    
display: felx;
justify-content: space-between;
align-items:center;

padding: 10px;
text-overflow: ellipsis;
line-height: 1.3;
font-size: 18px;
`;

export const ButtonsRow = styled.div`
margin-top:3px;
display:flex;
align-item:center;
justify-content:center;
`

export const TicketCounter = styled.div`
padding-top: 4px;
height:23px;
width:25px;
border-radius: 100px;
margin-right:5px;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
`

export const EditListDiv = styled.div`
position: relative;
width: 700px;
border-radius: 10px;
background-color: #1e272e;
padding:25px;`;
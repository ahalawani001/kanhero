import styled from "styled-components"



export const ListDiv = styled.div`
height: 700px;
min-width: 300px;
  position: relative;
background-color: #2B343B;
margin-right: 25px;
border-radius:4px;

box-shadow: 0 -30px 30px -15px rgba(0,0,0,1);
${'' /* padding-bottom: 10px; */}
overflow:hidden;


`;

export const ListHeader = styled.div`
height: 35px;
border-top: 4px solid red;    
${'' /* background-color: red;  */}
display: felx;
justify-content: space-between;
align-items:center;

padding: 10px;
text-overflow: ellipsis;
line-height: 1.3;
font-size: 18px;

${'' /* box-shadow: 0px 2px 4px #171b1f;  */}
`;

export const ButtonsRow = styled.div`
margin-top:3px;
display:flex;
align-item:center;
justify-content:center;
${'' /* background-color:blue; */}
`

export const TicketCounter = styled.div`
${'' /* border: 1px solid white; */}
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
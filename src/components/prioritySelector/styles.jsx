
import styled from 'styled-components'

export const PrioritySelectorDiv = styled.div`
width: 100%;
margin-top: 35px;
display: flex;
justify-content: space-between;

`

export const PrioritiesDiv = styled.div`

display:flex;
flex-direction: column;
justify-content: start;
padding:10px;
width: 70%;
`;

export const PriorityButton = styled.div`
width:30%;
display:flex;
justify-content: space-between;
padding:10px 30px;
margin-bottom: 15px;
border-radius: 10px;
border: 1px solid ${(props) =>
props.isSelected ? props.color :props.color};
color:${(props) =>
props.isSelected ? `#1e272e` :props.color};;
font-weight:600;
background-color:${(props) =>
props.isSelected ? props.color :`transperent`};
transform: ${(props) =>
props.isSelected ? `scale(1.07)` :`scale(1)`};

&:hover{
background-color: ${props=> props.color};
color: #1e272e;
cursor:pointer;
transform: scale(1.07);
}
}
`;

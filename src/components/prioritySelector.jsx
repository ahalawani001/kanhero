import styled from 'styled-components'
import { RiFlag2Line } from "react-icons/ri";

export const PRIORITIES =[
    {
        priority: 'None',
        color: 'white'
    },
    {
        priority: 'Low',
        color: 'rgb(105, 105, 255)'
    },
    {
        priority: 'Normal',
        color: 'rgb(105, 255, 120)'
    },
    {
        priority: 'High',
        color: 'rgb(255, 255, 120)'
    },
    {
        priority: 'Urgent',
        color: 'rgb(255, 105, 120)'
    }
]


const PrioritySelectorDiv = styled.div`
${'' /* height: 50px; */}
width: 100%;
margin-top: 35px;
 ${'' /* background-color:black; */}
display: flex;
justify-content: space-between;

`

const PrioritiesDiv = styled.div`

display:flex;
flex-direction: column;
justify-content: start;
padding:10px;
width: 70%;
${'' /* background-color: white */}
`;

const PriorityButton = styled.div`
${'' /* margin:10px; */}
width:30%;
display:flex;
justify-content: space-between;
padding:10px 30px;
margin-bottom: 15px;
border-radius: 10px;
${'' /* border: 1px solid ${(props)=> props.color} */}
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

export  const PrioritySelector = (props)=>{
    
    return <PrioritySelectorDiv> 
   <p> Select Priority:</p>
   <PrioritiesDiv> {
    PRIORITIES.map((p)=>{
           return  <PriorityButton color={p.color} isSelected={p.priority === props.priority} onClick={()=>{return props.changePriority(p.priority)}}> {p.priority} 
           <RiFlag2Line style={{marginLeft: '20px'}} size={20}/>
           </PriorityButton>
        })
    }</PrioritiesDiv>
    
    </PrioritySelectorDiv>
}

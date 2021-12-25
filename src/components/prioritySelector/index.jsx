import * as styles from './styles'
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

export  const PrioritySelector = (props)=>{
    
    return(
    <styles.PrioritySelectorDiv>
    <p> Select Priority:</p>
    <styles.PrioritiesDiv> {
        
    PRIORITIES.map((p)=>{
           return  (
            <styles.PriorityButton 
            color={p.color} 
            isSelected={p.priority === props.priority}
            onClick={()=>{return props.changePriority(p.priority)}}>
                 {p.priority} 
                 <RiFlag2Line style={{marginLeft: '20px'}} size={20}/>
           </styles.PriorityButton>)
        })
    }</styles.PrioritiesDiv>
    
    </styles.PrioritySelectorDiv>)
}

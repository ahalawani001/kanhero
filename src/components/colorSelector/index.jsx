import * as styles from './styles'

export const ColorSelector =(props)=>{
    let colors=['red', 'purple', 'blue' , 'green', 'yellow', 'grey', 'white'];

    return <styles.ColorSelectorDiv>
    Select Color:
     <styles.ColorsDiv> 

    {colors.map((color)=>{
        return <styles.ColorButton
         color={color}
         isSelected ={color === props.color} 
         onClick={()=>{props.changeColor(color)}}/>
    })}
    
    </styles.ColorsDiv>
    </styles.ColorSelectorDiv>
}
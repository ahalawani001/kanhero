import styled from 'styled-components'

const ColorSelectorDiv = styled.div`
height: 50px;
width: 80%;
margin-top: 30px;
${'' /* background-color:black; */}
display: flex;
${'' /* justify-content:sp; */}
align-items:center;
`;

const ColorButton = styled.div`
width:24px;
height: 24px;
border-radius: 50px;
background-color: ${(props) =>
props.color };

margin-left:10px;
margin-right:10px;
transform: ${(props) =>
props.isSelected ? `scale(1.5)` :`scale(1)`};



&:hover{
cursor:pointer;
transform: scale(1.2);
}


`;



const ColorsDiv = styled.div`
display:flex;
justify-content: center;
width: 80%;
${'' /* background-color: white*/}
`;


export const ColorSelector =(props)=>{
    let colors=['red', 'purple', 'blue' , 'green', 'yellow', 'grey', 'white'];

    return <ColorSelectorDiv>Select Color: 
     <ColorsDiv> 
    {colors.map((color)=>{
        return <ColorButton color={color} isSelected ={color === props.color} onClick={()=>{props.changeColor(color)}}/>
    })}
    </ColorsDiv>
    </ColorSelectorDiv>
}
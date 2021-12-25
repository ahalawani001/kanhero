import styled from 'styled-components'


export const ColorSelectorDiv = styled.div`
height: 50px;
width: 85%;
margin-top: 30px;
display: flex;
justify-content:space-between;
align-items:center;
`;

export const ColorButton = styled.div`
width:24px;
height: 24px;
border-radius: 50px;
background-color: ${(props) =>
props.color };

margin-left:10px;
margin-right:10px;
transform: ${(props) =>
props.isSelected ? `scale(1.6)` :`scale(1)`};



&:hover{
cursor:pointer;
transform: scale(1.2);
}


`;



export const ColorsDiv = styled.div`
display:flex;
justify-content: center;
width: 80%;
${'' /* background-color: white*/}
`;
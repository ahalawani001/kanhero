import styled from "styled-components"
import { IoCloseOutline } from "react-icons/io5";

export const row = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`;

export const ClosePageDiv = styled.div`
position: absolute;
top:15px;
right:20px;
&:hover{
    cursor:pointer;
    z-index: 10;
    opacity: 0.7;  
}

`

export const ClosePageButton = (props)=>{

    return <ClosePageDiv onClick={props.closeForm}>
        <IoCloseOutline size={30}/>
    </ClosePageDiv>
}
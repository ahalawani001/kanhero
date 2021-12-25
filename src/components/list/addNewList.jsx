import  { useState, useRef } from "react";
import { ClosePageButton } from "../common";
import { v4 } from "uuid";
import * as styles from "./styles";
import { ColorSelector } from "../colorSelector";






export const AddNewListForm = (props)=>{
    const [listColor, setListColor] = useState('white');
    const titleRef = useRef();

    function submitHandler(event){
        event.preventDefault();

        const newTitle = titleRef.current.value;

        let list = {
            id: "L"+v4(),
            title: newTitle,
            color: listColor,
            tickets: []
        }
        
        props.addList(list);
        props.closeForm();
    }

    function handleColorChange(color){
        setListColor(color)
    }

    return <div className="customBackdrop">
        <styles.AddListDiv>
        <ClosePageButton closeForm = {props.closeForm}></ClosePageButton>
        <br />
        <h1>Add New List</h1>
        <div>
            <form onSubmit={submitHandler}> 
            <div className='groupList'>

            <label htmlFor="title" placeholder="Ex: All tasks">List Title: </label>   
            <input type="text"  required id = 'title' ref={titleRef}/>
         
            <br />
            
            <ColorSelector color={listColor} changeColor={handleColorChange}> </ColorSelector>
         
            <button className="cstmBtn">Add List</button>
            </div>
            </form>
        </div>

        </styles.AddListDiv>
    </div>
}
import react, { useState, useRef } from "react";
import styled from "styled-components";
import { ClosePageButton } from "../common";
import { v4 } from "uuid";


const AddListDiv = styled.div`
position: relative;
width: 700px;
height:300px;
border-radius: 10px;
background-color: #1e272e;
`;



export const AddNewListForm = (props)=>{
    const titleRef = useRef();

    function submitHandler(event){
        event.preventDefault();

        const newTitle = titleRef.current.value;

        let list = {
            id: "L"+v4(),
            title: newTitle,
            tickets: []
        }
        
        props.addList(list);
        props.closeForm();
    }

    return <div className="customBackdrop">
        <AddListDiv>
        <ClosePageButton closeForm = {props.closeForm}></ClosePageButton>
        <br />
        <h1>Add New List</h1>
        <br />  
        <div>
            <form onSubmit={submitHandler}> 
            <div className='groupList'>
            <label htmlFor="title" placeholder="Ex: All tasks">List Title: </label>
            <input type="text"  required id = 'title' ref={titleRef}/>
            <br />
         
            <button className="cstmBtn">Add List</button>
            </div>


            </form>
        </div>

        </AddListDiv>
    </div>
}
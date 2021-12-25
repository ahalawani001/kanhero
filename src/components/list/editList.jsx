import  { useState } from "react";
import { ColorSelector } from "../colorSelector";
import { ClosePageDiv } from "../common";
import { MdDeleteForever } from "react-icons/md";
import { ButtonsRow } from "../common";
import { EditListDiv } from "./styles";


export const EditListForm = (props)=>{
    const [title, setTitle] = useState(props.list.title?props.list.title:'')
    const [listColor, setListColor] = useState(props.list.color?props.list.color:'white');

    function submitHandler(event){
        
        event.preventDefault();


        let newList = {
            id: props.list.id,
            title: title,
            color: listColor,
            tickets: props.list.tickets
        }
        props.editList(newList)
    }
    
    function submitTitleOnChange (event){
        setTitle(event.target.value);
    } 
    
    function handleColorChange(color){
        setListColor(color)
    }

    function HandleDelete(){
        props.deleteList(props.list, "list");
    }

    return (<div className="customBackdrop">
    <EditListDiv>
    

    <ClosePageDiv  onClick={HandleDelete}>
        <MdDeleteForever size={35} color="red"/>
        </ClosePageDiv>    <h1>Update List</h1>
    
    <form onSubmit={submitHandler}> 

            <div className='groupList'>

            <label htmlFor="title" placeholder="Ex: All tasks">List Title: </label>   
            <input type="text"  required id = 'title' value={title} onChange={submitTitleOnChange}/>
         
            <br />
            
            <ColorSelector color={listColor} changeColor={handleColorChange}> </ColorSelector>
         

            <ButtonsRow >
            <button className="cstmBtn" onClick={props.closeForm}>Cancel</button>
            <button className="updateBtn" >Update</button>
            </ButtonsRow>
        </div>
            </form>

    </EditListDiv>
    </div>);
}
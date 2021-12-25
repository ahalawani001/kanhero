import styled from "styled-components";

const DeleteBoxDiv = styled.div`
position: relative;
width: 600px;
height:270px;
border-radius: 10px;
display:flex;
flex-direction:column;
justify-content: center;
align-items:center;
background-color: #1e272e;
`


export const  DeleteBox = (props)=>{

    function handleDelete(){
        props.deleteList();
        props.closeForm();
    }

    function handleCancel(){
        props.closeForm();
    }

    return <div className="customBackdrop">
       <DeleteBoxDiv>
           <h3>Are you sure you want to delete this item?</h3>
           <p>This Item will be deleted immediately. You can't undo this action.</p>
           <div>
           <button className="cstmBtn mini" onClick={handleCancel}> Cancel</button>
           <button className="deleteBtn" onClick={handleDelete}> Delete</button>
           </div>
       </DeleteBoxDiv>
    </div>

}
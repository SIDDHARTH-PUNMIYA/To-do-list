import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
function todolist(props) {
    return(
        <>
        <div className="todo_style">
       <DeleteIcon className="icon" onClick={()=>{
        props.onSelect(props.index)
        }}/>
        <li>  {props.value}</li> 
        </div>
        </>
    );
}
export default todolist
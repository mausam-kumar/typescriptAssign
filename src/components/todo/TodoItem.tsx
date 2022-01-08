import React from 'react'
import {TodoType} from "./Todo"
import Button from '@mui/material/Button';

interface Props{
    id : string | number,
    status : boolean,
    title : string,
    description : string,
    handleToggle : (id:string|number) => void,
    handleDelete : (id:string|number) => void
}

function TodoItem({id,title,description,status,handleToggle,handleDelete}:Props) {

    const style = {
        mainDiv:{
            display: 'flex',
            justifyContent: 'center'
        },
        p:{
            margin:"10px"
        },
        button:{
            margin:"10px"
        }
    }
    return (
        <div style={style.mainDiv}>
            <p style={style.p} >Title : {title}</p>
            <p style={style.p} >Description : {description}</p>
            <p style={style.p} >Status : {status===false?"false":"true"}</p>
            
            <Button style={style.button}  variant="contained" onClick={() => handleToggle(id)}>Toggle</Button>
            <Button  style={style.button} variant="contained" onClick={() => handleDelete(id)}>Delete</Button>
        </div>
    )
}

export default TodoItem

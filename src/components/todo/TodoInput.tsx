import React from 'react'
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import {TodoType} from "./Todo"
import {v4 as uuid} from 'uuid'

interface Props{
    passHandleAdd : (input : TodoType) => void
}
function TodoInput({passHandleAdd}:Props) {

    const [state,setState] = React.useState<TodoType>({
        title:"",
        description:"",
        status:false,
        id: uuid()
    })

    const  handleChange :React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined = (e) => {
        const name = e.target.name

        setState({
            ...state,
            [name]:e.target.value
        })
    }

    const style = {
        mainDiv:{
            display: "flex",
            justifyContent: "flexStart"
        },
        childDiv:{
            marginRight:"15px"
        }
    }

    return (
        <div style={style.mainDiv}>
            <div style={style.childDiv}>
                <InputLabel htmlFor="component-disabled">Title</InputLabel>
                <Input id="component-disabled" name="title" value={state.title} onChange={(e) => handleChange(e)} />
            </div>
            <div style={style.childDiv}>
                <InputLabel htmlFor="component-disabled">Description</InputLabel>
                <Input id="component-disabled" name="description" value={state.description} onChange={(e) => handleChange(e)} />
            </div>
            <Button variant="contained" onClick={() => passHandleAdd({...state,id:uuid()})}>ADD</Button>
        </div>
    )
}

export default TodoInput

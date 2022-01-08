import React from 'react'
import {TodoType} from './Todo'
import TodoItem from './TodoItem'

interface Props{
    data : TodoType[],
    handleToggle : (id:string|number) => void,
    handleDelete : (id:string|number) => void
}

function TodoList({data,handleToggle,handleDelete}:Props) {
    return (
        <div>
            {
                data.map((ele) => {
                    return(
                        <div key={ele.id}>
                            <TodoItem  id = {ele.id} 
                            title={ele.title} 
                            description={ele.description} 
                            status={ele.status} 
                            handleToggle={handleToggle}
                            handleDelete={handleDelete}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TodoList

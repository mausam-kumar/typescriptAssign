import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'


export interface TodoType{
    description: string,
    id : string | number,
    status:boolean,
    title: string
}

function Todo() {
    const [data,setData] = React.useState<TodoType[]>([])

    function handleAdd(payload : TodoType): void{
        setData([...data,payload])
    }

    function handleToggle(id : string | number): void {
        let newData : TodoType[];
        newData = data.map((ele: TodoType) => ele.id===id?{...ele,status:!ele.status}:ele)
        setData(newData)
    }

    function handleDelete(id : string | number): void {
        const newData = data.filter((ele : TodoType) => ele.id !== id)
        setData(newData)
    }


    return (
        <div>
            <TodoInput passHandleAdd={handleAdd} />
            <TodoList data={data} handleDelete={handleDelete} handleToggle={handleToggle}/>
        </div>
    )
}

export default Todo

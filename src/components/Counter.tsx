import React from 'react';


const Counter = () => {
    const [count,setCount] = React.useState<number>(0)

    function handleIncrement(){
        setCount(prev => prev + 1)
    }
    function handleDecrement(){
        setCount(prev => prev===0?0:prev - 1)
    }
    return(
        <div>
            <button onClick={handleIncrement} style={{margin:"10px"}}>Increment</button>
            <span>{count}</span>
            <button onClick={handleDecrement} style={{margin:"10px"}}>Decrement</button>
        </div>
    )
}

export default Counter
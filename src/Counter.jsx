import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1 ;
        setCount(newCount);
    }

    const handleReduce = () => {
        const reduceCount = count - 1;
        setCount(reduceCount);
    }

    return (
        <div style={{border: '2px solid red', marginBottom: '20px'}} >
            <h3>Counter: {count} </h3>
            <button style={{marginRight: '20px', marginBottom: '20px'}} onClick={handleAdd} >ADD</button>
            <button onClick={handleReduce} >Reduce</button>
        </div>
    )
}
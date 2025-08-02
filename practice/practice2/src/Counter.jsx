import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0)

    const upCount = () => {
        setCounter(counter + 1)
    }

    const downCount=()=>{
        setCounter(counter -1)
    }

    return (
        <>
            <p>현재 값 : {counter}</p>
            <button onClick={upCount}>
                +1
            </button>
            <button onClick={downCount}>
                -1
            </button>
        </>
    )
}

export default Counter
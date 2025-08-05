import CounterDisplay from "./CounterDisplay";
import { useContext } from "react";
import { CounterContext } from "./context/CounterContext";

function CounterControls() {
    const { count, setCount } = useContext(CounterContext)

    const handleClickUp = () => {
        setCount(c => c + 1)
    }
    const handleClickDown = () => {
        setCount(c => c - 1)
    }

    return (
    <>
        <button onClick={handleClickUp}>+1</button>
        <button onClick={handleClickDown}>-1</button>
    </>
    )
}
export default CounterControls
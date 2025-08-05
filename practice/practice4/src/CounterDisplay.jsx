import { useContext } from "react"
import CounterControls from "./CounterControls"
import { CounterContext } from "./context/CounterContext"

function CounterDisplay() {
    const {count} = useContext(CounterContext)
    return (
        <div>
        <p>Counter: {count}</p>
        <CounterControls/>
        </div>
    )
}

export default CounterDisplay

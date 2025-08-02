import { useEffect, useState } from "react"

const IntervalTimer = () => {
    const [timer, setTimer] = useState(0)
    const [state, setState] = useState('stop')

    useEffect(() => {
        let interval = null
        if (state === 'running') {
            interval = setInterval(() => {
                setTimer((t) => t + 1)
            }, 1000)
        } else {
            clearInterval(interval)
        }
        return () => {
            clearInterval(interval)
        }
    }, [state])

    const handleClick = () => {
        setState(state === 'running' ? 'stop' : 'running')
    }

    const handleClickInit = () => {
        setState('stop')
        setTimer(0)
    }

    return (
        <>
            <p>타이머: {timer} 초</p>
            <button onClick={handleClick}>{state === 'running' ? '중지' : '시작'}</button>
            <button onClick={handleClickInit}>초기화</button>
        </>
    )
}

export default IntervalTimer
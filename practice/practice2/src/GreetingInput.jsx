import { useState } from "react"


function GreetingInput() {
    const [name, setName] = useState('')
    const [greetMsg, setGreetMsg] = useState('')

    const addName = (e) => {
        setName(e.target.value)
    }

    const greeting = () => {
        setGreetMsg(`안녕 ${name}`)
        setName('')
    }

    return (
        <>
            <input type="text" value={name} onChange={addName} />
            <button onClick={greeting}>
                인사하기
            </button>
            <p id="greeting">{greetMsg}</p>
        </>
    )
}

export default GreetingInput
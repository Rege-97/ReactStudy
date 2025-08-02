import { useState } from "react";

function ToggleButton() {

    const [toggle, setToggle] = useState(false)

    const putToggle = () => {
        setToggle(!toggle)
    }

    return (
        <>
            <button onClick={putToggle}>
                {toggle ? "ON" : "OFF"}
            </button>
        </>
    )
}

export default ToggleButton
import React from "react"

function Child({count}){
    return(
        <p>Count: {count}</p>
    )
}

export default React.memo(Child)
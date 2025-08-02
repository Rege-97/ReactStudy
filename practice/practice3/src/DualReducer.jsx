import { useReducer } from "react"
import { countReducer, initialState } from "./reducers/countReducer"
import { loginReducer, initialState2 } from "./reducers/loginReducer"

const DualReducer = () => {
    const [countState, countDispatch] = useReducer(countReducer, initialState)
    const [loginState, loginDispatch] = useReducer(loginReducer, initialState2)

    const handleClickCount = (type, value) => {
        countDispatch({
            type, payload: { value }
        })
    }

    const handleClickLogin = () => {
        const type = loginState.loggedIn ? 'logout' : 'login'
        loginDispatch({ type })
    }

    return (
        <>
            <p>{loginState.loggedIn ? `${loginState.name}님 로그인` : ''}</p>
            <p>Count: {countState.count}</p>
            <button onClick={() => handleClickCount('INC', 1)}>
                +1
            </button>
            <button onClick={() => handleClickCount('DEC', 1)}>
                -1
            </button>
            <button onClick={() => handleClickLogin()}>
                {loginState.loggedIn ? '로그아웃' : '로그인'}
            </button>
        </>
    )
}

export default DualReducer
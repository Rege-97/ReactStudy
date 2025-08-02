import { useRef } from 'react'
import './App.css'

import Counter from './Counter'

// const App = () => (
//   <>
//     <Counter />
//   </>
// )

// 특정 DOM 요소로 포커스를 주는 용도로도 useRef 사용
const App = () => {
  const inputRef = useRef(null)

  const handleFocus = () => {
    console.log(inputRef.current)
    inputRef.current.focus()
  }

  return (
    <div>
      <input ref={inputRef}
        type="text" placeholder='type...' />
      <button onClick={handleFocus}>
        Focus Input
      </button>
    </div>
  )
}

export default App
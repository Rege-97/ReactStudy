import { useCallback, useMemo, useState } from 'react'
import './App.css'
import Child from './Child'

// function App() {
//   const [count1, setCount1] = useState(0)
//   const [count2, setCount2] = useState(0)

//   const heavyCalculation = (num) => {
//     console.log('Calculating...')
//     let result = 0
//     for (let i = 0; i < 1000000000; i++) {
//       result += num
//     }
//     return result
//   }

//   // useMemo는 특정 연산의 불필요한 재실행을 방지하여 성능을 최적화하는데 사용
//   // 첫번째 인자에는 실행할 함수, 두번째 인자에는 해당 연산이 실행될 기준
//   const calculatedValue = useMemo(
//     () => heavyCalculation(count2), [count2]
//   )

//   return (
//     <>
//       <p>Counter 1: {count1}</p>
//       <button onClick={() => setCount1(count1 + 1)}>
//         +
//       </button>
//       <button onClick={() => setCount1(count1 - 1)}>
//         -
//       </button>
//       <p>Counter 2: {calculatedValue}</p>
//       <button onClick={() => setCount2(count2 + 1)}>
//         +
//       </button>
//       <button onClick={() => setCount2(count2 - 1)}>
//         -
//       </button>
//     </>
//   )
// }

function App() {
  const [count, setCount] = useState(0)
  const [active, setActive] = useState(true)

  // useCallback은 함수의 재생성을 방지하는 훅
  // 두번째 인자의 의존석이 변경되지 않으면 재생성되지 않음
  // 빈 배열이면 리렌더링되어도 계속 사용
  const handleClick = useCallback(
    () => { setCount(c => c + 1) }, []
  )

  return (
    <>
      <h2>Parent</h2>
      <button onClick={() => setActive(a => !a)}>
        Toggle Active
      </button>
      <p>Count: {count}</p>
      <Child active={active}
        onClick={handleClick} />
    </>
  )
}

export default App
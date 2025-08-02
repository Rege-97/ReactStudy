import { useState, useRef } from "react";

// useRef는 렌더링과 상관 없이 다루는 값
// 일반적인 변수는 리렌더링 되면 초기화됨
// 일반적인 변수를 컴포넌트 함수 밖에 선언해도 컴포넌트가 여러개 사용 시 변수를 공유하게 됨
function Counter() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    const [count3, setCount3] = useState(0)
    const refCount = useRef(0)
    let countVar = 0

    const incrementRef = () => {
        refCount.current += 1
        console.log('Ref Count', refCount.current)
    }

    const incrementVar = () => {
        countVar++
        console.log(
            'Var Count: ', countVar
        )
    }

    const syncCounts = () => {
        setCount1(refCount.current)
        setCount2(countVar)
        setCount3(prev => prev + 1)
    }

    return (
        <>
            <h2>Counter Counter</h2>
            <p>Count 1: {count1}</p>
            <p>Count 2: {count2}</p>
            <p>Count 3: {count3}</p>
            <button onClick={incrementRef}>useRef</button>
            <button onClick={incrementVar}>local var</button>
            <button onClick={syncCounts}>useState</button>
        </>
    )
}

export default Counter
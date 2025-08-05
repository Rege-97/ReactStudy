import { useCallback, useState } from 'react'
import './App.css'
import Child from './Child'
import { CounterProvider } from './context/CounterContext'
import CounterDisplay from './CounterDisplay'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

// function App() {
//   const [count, setCount] = useState(0)

//   const handleClickUp = useCallback(
//     () => { setCount(c => c + 1) }, []
//   )
//   const handleClickDown = useCallback(
//     () => { setCount(c => c - 1) }, []
//   )

//   return (
//     <>
//       <Child count={count} />
//       <button onClick={handleClickUp}>+1</button>
//       <button onClick={handleClickDown}>-1</button>
//     </>
//   )
// }

// function App() {
//   return (
//     <CounterProvider>
//       <CounterDisplay />
//     </CounterProvider>
//   )
// }

function App() {
  return (
    <>
      <nav>
        <Link to={'/'} >Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
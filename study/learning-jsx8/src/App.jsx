import { useEffect, useState } from 'react'
import './App.css'
import ClassComp from './ClassComp'
import FuncComp from './FuncComp'
import Timer from './Timer'


// const App = () => {
//   const [selected, setSelected] = useState('')

//   return (
//     <>
//       {
//         ['', 'ClassComp', 'FuncComp'].map((option) => (
//           <label key={option}>
//             <input
//               type='radio'
//               value={option}
//               checked={selected === option}
//               onChange={(e) => setSelected(e.target.value)} />
//             {option || 'None'}
//           </label>
//         ))
//       }
//       {selected && (selected === 'ClassComp' ? <ClassComp /> : <FuncComp />)}
//     </>
//   )
// }

// const App = () => {
//   const [count1, setCount1] = useState(0)
//   const [count2, setCount2] = useState(0)

//   const handleIncrease = (setter) => { setter((prev) => prev + 1) }

//   useEffect(() => {
//     console.log(`C1: ${count1}, C2: ${count2}`)
//   }, [count1, count2])

//   return (
//     <div>
//       <h2>Count1: {count1}</h2>
//       <button onClick={() => handleIncrease(setCount1)}>Count1++</button>
//       <h2>Count2: {count2}</h2>
//       <button onClick={() => handleIncrease(setCount2)}>Count2++</button>
//     </div>
//   )
// }

// const App = () => {
//   const [books, setBooks] = useState([])

//   useEffect(() => {

//     const fetchBooks = async () => {
//       try {
//         const response = await fetch('/data/books.json')
//         const data = await response.json()
//         setBooks(data)
//       } catch (error) {
//         console.error(
//           'Failed to fetch books:', error
//         )
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchBooks()
//   }, [])
//   return (
//     <div>
//       <h2>Book List</h2>
//       <ul>
//         {books.map((book) => (
//           <li key={book.id}>
//             <strong>{book.title}</strong>
//             by {book.author}
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

const App = () => {
  const [ showTimer, setShowTimer ] = useState(false)

  return (
    <>
      <label>
        <input
          type='checkbox'
          checked={showTimer}
          onChange={
            (e) => setShowTimer(
              e.target.checked
            )
          } />
        Show Timer
      </label>
      {showTimer && <Timer />}
    </>
  )
}

export default App
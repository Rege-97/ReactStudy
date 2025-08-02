import './App.css'
import useCounter from './hooks/useCounter'
import { useFetch } from './hooks/useFetch'
import useWindowSize from './hooks/useWindowSize'

// const App = () => {
//   const {
//     count, increment, decrement
//   } = useCounter(0)

//   return(
//     <>
//     <h2>Counter: {count}</h2>
//     <button onClick={increment}>
//       Increment
//     </button>
//     <button onClick={decrement}>
//       Decrement
//     </button>
//     </>
//   )
// }

// const App = () =>{
//   const {width, height} = useWindowSize()

//   return(
//     <>
//       <h2>Window Size</h2>
//       <p>Width: {width}</p>
//       <p>height: {height}</p>
//     </>
//   )
// }

const App = () => {
  const { data, loading, error }
    = useFetch('http://localhost:3000/books')

  return (
    <>
      <h2>Book List</h2>
      {
        loading ? <p>Loading...</p>
          : error ? <p>Error: {error}</p>
            : (
              <ul>
                {data.map(book => (
                  <li key={book.id}>
                    <strong>{book.title} </strong>
                    by {book.author}
                  </li>
                ))}
              </ul>
            )
      }
    </>
  )
}

export default App

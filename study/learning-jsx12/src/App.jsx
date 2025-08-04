import { Route, Routes, Link, useNavigate, useLocation, useParams } from 'react-router-dom'
import './App.css'
// import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { useEffect } from 'react'

// function App() {
//   return (
//     <>
//       <nav>
//         <Link to={'/'}>Home</Link>
//         <Link to={'/about'}>About</Link>
//         <Link to={'/contact'}>Contact</Link>
//       </nav>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/contact' element={<Contact />} />
//       </Routes>
//     </>
//   )
// }

// // Link와 달리 동적으로 경로 수정할 때 용이
// function App() {
//   const navigate = useNavigate()

//   const navTo = (path) => {
//     navigate(path)
//   }

//   return (
//     <>
//       <button onClick={() => navTo('/')}>
//         Home
//       </button>
//       <button onClick={() => navTo('/about')}>
//         About
//       </button>
//       <button onClick={() => navTo('/contact')}>
//         Contact
//       </button>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/contact' element={<Contact />} />
//       </Routes>
//     </>
//   )
// }

function Home() {
  const location = useLocation()

  useEffect(() => {
    console.log('Current Path: ', location.pathname)
  }, [location])

  return <h1>Home Page</h1>
}

function User() {
  const { id } = useParams()
  const location = useLocation()

  useEffect(() => {
    console.log('Current Path: ', location.pathname)
    console.log('URL Parameter (id): ', id)
  }, [id, location])

  return <h1>User ID: {id}</h1>
}

function Search() {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const keyword = queryParams.get('keyword')

  useEffect(() => {
    console.log('Current Path: ', location.pathname)
    console.log('Query Parameter (keyword): ', keyword)
  }, [keyword, location])

  return <h1>Search Keyword: {keyword}</h1>
}

// function App() {
//   return (
//     <Routes>
//       <Route path='/' element={<Home />} />
//       <Route path='/user/:id' element={<User />} />
//       <Route path='/search' element={<Search />} />
//     </Routes>
//   )
// }

const App=()=>{
  return(
    <>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/wrong-path'>Wrong Path</Link>
    </nav>
    <Routes>
      <Route path='/' element={<h2>Home Page</h2>}/>
      <Route path='/about' element={<h2>About Page</h2>}/>
      <Route path='*' element={<h2>404 - Page Not Found</h2>}/>
    </Routes>
    </>
  )
}

export default App
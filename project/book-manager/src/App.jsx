import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Error from "./components/Error"
import BookDetails from "./pages/BookDetails"
import AddBook from "./pages/AddBook"
import EditBook from "./pages/EditBook"

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/edit/:id" element={<EditBook />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Layout>
  )
}

export default App
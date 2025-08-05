import { useParams } from "react-router-dom"
import BookDetial from "../components/BookDetail"

const BookDetails = () =>{
    const {id} = useParams()

    return (
        <div>
            <h1>Book Details</h1>
            <BookDetial id={id} />
        </div>
    )
}

export default BookDetails
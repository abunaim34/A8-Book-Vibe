
import Book from "./Book";
import {useLoaderData} from "react-router-dom"


const Books = () => {
    const books = useLoaderData()
    return (
        <div className="mt-24">
            <h2 className="text-3xl font-bold text-center">Books</h2>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;
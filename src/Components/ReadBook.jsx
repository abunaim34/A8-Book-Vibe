import { useEffect, useState } from "react";
import { getBookFromLocal } from "../Utils";
import SingleBook from "./SingleBook";


const ReadBook = () => {
    const [appliedBook, setAppliedBook] = useState([]);

    console.log(appliedBook);

    useEffect(() => {
        const book = getBookFromLocal()
        setAppliedBook(book)
    }, [])
    return (
        <div>
            {
                appliedBook.map((book, i) => <SingleBook key={i} book={book}></SingleBook>)
            }
        </div>
    );
};

export default ReadBook;
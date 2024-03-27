import { useEffect, useState } from "react";
import { getBookFromLocal } from "../Utils";
import SingleBook from "./SingleBook";

const ReadBook = () => {
    const [appliedBook, setAppliedBook] = useState([]);

    useEffect(() => {
        const read = getBookFromLocal()
        setAppliedBook(read )
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
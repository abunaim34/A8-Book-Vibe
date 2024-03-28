import {  useContext, useEffect, useState } from "react";
import { getBookFromLocal } from "../Utils";
import SingleBook from "./SingleBook";
import { DataContext } from "../Pages/ListedBooks";
// import { DataContext } from "../Pages/ListedBooks";
// import Rating from "./Rating";

const ReadBook = () => {
    const [appliedBook, setAppliedBook] = useState([]);
    // const [data, setData] = useState([])
    const ratin = useContext(DataContext)
    // setData(ratin)
    // console.log(ratin);

    useEffect(() => {
        const read = getBookFromLocal()
        setAppliedBook(read )
    }, [])
    return (
        <div>
            {/* {
                data.map((d, i) => <Rating key={i} rating={d}></Rating>)
            } */}
            {
                appliedBook.map((book, i) => <SingleBook key={i} book={book} ratin={ratin}></SingleBook>)
            }
        </div>
    );
};

export default ReadBook;
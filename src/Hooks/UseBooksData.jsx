import { useEffect } from "react";
import { useState } from "react";


const UseBooksData = () => {
    const [books, setBooks] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/Book.json');
            const data = await res.json()
            setBooks(data)
        }

        fetchData()
    }, [])
    return { books }
};

export default UseBooksData;
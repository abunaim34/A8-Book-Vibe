import { useEffect, useState } from "react";
import Wishlist from "../Components/Wishlist";
import { getBookFromLocalWishlist } from "../Utils/wishlist";


const WishlistBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=> {
        const books = getBookFromLocalWishlist()
        setBooks(books)
    }, [])
    return (
        <div>
           {
            books.map((b, i) => <Wishlist key={i} book={b}></Wishlist>)
           }
        </div>
    );
};

export default WishlistBooks;
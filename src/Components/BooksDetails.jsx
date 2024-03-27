import { useParams } from 'react-router-dom';
import ShowBook from './ShowBook';
import { useLoaderData } from "react-router-dom"
import {   getBookFromLocal, saveBookLocalStored } from '../Utils';
import {  saveBookWishlist } from '../Utils/wishlist';
import toast from "react-hot-toast"

const BooksDetails = () => {
    const books = useLoaderData()
    const { id } = useParams()
    const book = books.find(b => b.id == id)

    const handleReadBook = () => {
        saveBookLocalStored(book)
    }

    const handleWishlist = () => {
        const reads =  getBookFromLocal()
        const wishlist = reads.find(read => read.id == book.id)
        if(wishlist) {
            toast.error("Already added to read")
        }else{
            saveBookWishlist(book)
        }   
        
    }

    return (
        <div className="lg:mx-28 mt-16">
            <ShowBook book={book} handleReadBook={handleReadBook} handleWishlist={handleWishlist}></ShowBook>
        </div>
    );
};

export default BooksDetails;


















// // import { useEffect } from "react";
// // import { useState } from "react";
// // import { useParams } from 'react-router-dom';
// // import UseBooksData from "../Hooks/UseBooksData";


// // const BookDetails = () => {
// //     const [book, setBook] = useState({})
// //     const { id } = useParams()
// //     const { books } = UseBooksData()

// //     useEffect(() => {
// //         if (books) {
// //             const singleBook = books.find(b => b.id == id)
// //             setBook(singleBook)
// //         }
// //     }, [books, id])


// //     // console.log(book);
// //     const {name, image} = book;
// //     console.log(name);
// //     return (

// //         <div className="lg:mx-28 mt-16">
// //             {/* <div className="card card-side bg-base-100 shadow-xl">
// //                 <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
// //                 <div className="card-body">
// //                     <h2 className="card-title">New movie is released!</h2>
// //                     <p>Click the button to watch on Jetflix app.</p>
// //                     <div className="card-actions justify-end">
// //                         <button className="btn btn-primary">Watch</button>
// //                     </div>
// //                 </div>
// //             </div> */}
// //             loading......
// //         </div>
// //     );
// // };

// // export default BookDetails;
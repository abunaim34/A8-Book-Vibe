import toast from "react-hot-toast"

export const saveBookWishlist = (book) =>{
    const saveBooks = JSON.parse(localStorage.getItem("wishlist")) || [];
    const storedBooks = saveBooks.find(b => b.id == book.id)
    if(storedBooks){
        toast.error("Book already added wishlist")
    }else{
        saveBooks.push(book)
        const localBook = JSON.stringify(saveBooks)
        localStorage.setItem("wishlist", localBook)
        toast.success('Book added to wishlist Successfully!')
    }
}

export const getBookFromLocalWishlist = () =>{
    const getDefaultBook = JSON.parse(localStorage.getItem("wishlist")) || [];
    return getDefaultBook;
}
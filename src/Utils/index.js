export const saveBookLocalStored = (book) =>{
    const saveBooks = JSON.parse(localStorage.getItem("books")) || [];
    const storedBooks = saveBooks.find(b => b.id == book.id)
    if(storedBooks){
        alert('find')
    }else{
        saveBooks.push(book)
        const localBook = JSON.stringify(saveBooks)
        localStorage.setItem("books", localBook)
    }
}

export const getBookFromLocal = () =>{
    const getDefaultBook = JSON.parse(localStorage.getItem("books")) || [];
    return getDefaultBook;
}
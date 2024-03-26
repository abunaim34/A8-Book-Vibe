import { createBrowserRouter } from "react-router-dom"
import ErrorPage from "../Components/ErrorPage";
import Home from "../Pages/Home";
import ListedBooks from "../Pages/ListedBooks"
import PageToRead from "../Pages/PageToRead"
import AmazonBooks from "../Pages/AmazonBooks"
import BookHub from "../Pages/BookHub"
import Root from "../Layout/Root";
import BooksDetails from "../Components/BooksDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
      element: <Root />,
      children: [
        {
            path: "/",
            loader: ()=> fetch('/Book.json'),
            element: <Home></Home>
        },
        {
            path: "/booksDetails/:id",
            loader: () => fetch(`/Book.json`),
            element: <BooksDetails />
        },
        {
            path: "/listedBooks",
            element: <ListedBooks />
        },
        {
            path: "/pageToRead",
            element: <PageToRead />
        },
        {
            path: "/amazoneBooks",
            element: <AmazonBooks />
        },
        {
            path: "/bookhub",
            element: <BookHub></BookHub>
        },
      ]
    },
]);
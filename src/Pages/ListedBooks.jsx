import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom"

const ListedBooks = () => {
    const hldl = () => console.log('kichu')
    return (
        <div className="lg:mx-28 mt-9">
            <div className="bg-[#1313130D] rounded-2xl text-center">
                <h2 className="text-3xl font-bold py-8 text-black">Books</h2>
            </div>
            <div className="text-center mt-8">
                <details className="dropdown">
                    <summary className="m-1 btn text-white font-bold bg-[#23BE0A]">Sort By <FaAngleDown /> </summary>
                    <ul className="p-2 shadow menu dropdown-content bg-[#1313130D] z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={hldl}> <a href="">Rating</a></li>
                        <li><a href="">Number of pages</a></li>
                        <li><a href="">Publisher year</a></li>
                    </ul>
                </details>
            </div>
            <div className="mt-14">
                <div className="flex items-start -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                    <Link to="/listedBooks" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span>Read Books</span>
                    </Link>
                    <Link to="" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-600 dark:text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        <span>Wishlist Books</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;
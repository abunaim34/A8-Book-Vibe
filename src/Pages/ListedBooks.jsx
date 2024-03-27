import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom"

const ListedBooks = () => {
    const [tab, setTab] = useState(0)
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
                <div className="flex items-start mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                    <Link to="/listedBooks" onClick={() => setTab(0)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600 
                          ${tab === 0 ? 'border border-b-0' : 'border-b'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        <span>Read Books</span>
                    </Link>
                    <Link to="wishlistBook" onClick={() => setTab(1)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600 
                          ${tab === 1 ? 'border border-b-0' : 'border-b'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        <span>Wishlist Books</span>
                    </Link>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;
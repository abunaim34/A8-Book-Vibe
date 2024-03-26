import { Link, NavLink } from "react-router-dom";


const Navber = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/listedBooks">Listed Books</NavLink></li>
                        <li><NavLink to="/pageToRead">Pages to Read</NavLink></li>
                        <li><NavLink to="/amazoneBooks">Amazon Books</NavLink></li>
                        <li><NavLink to="/bookhub">BookBub</NavLink></li>

                    </ul>
                </div>
                <Link to="/" className="btn text-xl lg:text-2xl font-bold">Book Vibe</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/" className={({isActive}) => isActive && 'border border-[#23BE0A] text-[#23BE0A] font-semibold'}>Home</NavLink></li>
                    <li><NavLink to="/listedBooks" className={({isActive}) => isActive && 'border border-[#23BE0A] text-[#23BE0A] font-semibold'}>Listed Books</NavLink></li>
                    <li><NavLink to="/pageToRead" className={({isActive}) => isActive && 'border border-[#23BE0A] text-[#23BE0A] font-semibold'}>Pages to Read</NavLink></li>
                    <li><NavLink to="/amazoneBooks" className={({isActive}) => isActive && 'border border-[#23BE0A] text-[#23BE0A] font-semibold'}>Amazon Books</NavLink></li>
                    <li><NavLink to="/bookhub" className={({isActive}) => isActive && 'border border-[#23BE0A] text-[#23BE0A] font-semibold'}>BookHub</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end space-x-4 ">
                <a className="btn font-semibold text-white bg-[#23BE0A]">Sign In</a>
                <a className="btn font-semibold text-white  hidden lg:block pt-4 bg-[#59C6D2]">Sign Up</a>
            </div>
        </div>
    );
};

export default Navber;
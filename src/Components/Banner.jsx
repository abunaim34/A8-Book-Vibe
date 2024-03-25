import Bnr from "../assets/Bnr.png"
import { Link } from "react-router-dom"

const Banner = () => {
    return (
        <div className="hero w-full bg-base-200 mt-16 rounded-[24px]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className="mr-28 ml-20 my-16 h-[394px]" src={Bnr} />
                <div className="ml-28 mt-32 ">
                    <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                    <Link to="/listedBooks">
                        <button className="btn mt-12 bg-[#23BE0A] font-bold text-white">View The List</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
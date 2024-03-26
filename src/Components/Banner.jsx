import Bnr from "../assets/Bnr.png"
import { Link } from "react-router-dom"

const Banner = () => {
    return (
        <div className="hero w-full bg-base-200 mt-16 rounded-[24px]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className="lg:mr-28 lg:ml-20 my-16 lg:h-[394px]" src={Bnr} />
                <div className="lg:ml-28 lg:mt-32 flex flex-col items-center">
                    <h1 className="text-3xl lg:text-5xl font-bold text-center">Books to freshen up your bookshelf</h1>
                    <Link to="/listedBooks">
                        <button className="btn mt-12 bg-[#23BE0A] font-bold text-white">View The List</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
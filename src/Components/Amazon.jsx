import { IoMdTime } from "react-icons/io";
import { RiFireLine } from "react-icons/ri";
// import PropTypes from 'prop-types';
import { TiStarOutline } from "react-icons/ti";
import { AiFillDollarCircle } from "react-icons/ai";


const Amazon = ({ amazon }) => {
    const { name, author, image, pages, rating, category, publisher, price } = amazon || {};
    console.log(amazon);
    return (
        <div>
            <div className="card bg-base-100 shadow-xl ">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl w-[251px] h-[200px]" />
                </figure>
                <div className="card-body text-start">
                    <h2 className="font-bold text-xl">{name}</h2>
                    <div className="flex">
                        <p className="font-medium">{author}</p>
                        <h2 className="font-medium"><span className="font-medium flex items-center">{rating} <TiStarOutline></TiStarOutline></span></h2>
                    </div>
                    <div className="flex justify-between lg:gap-6">
                        <p>Publisher: <span className="font-medium">{publisher}</span></p>
                        <p>Pages: <span className="font-medium">{pages}</span></p>
                    </div>
                    <div className=" flex flex-col ">
                        <div className='flex justify-between items-center'>
                            <div className="flex justify-between items-center mr-7">
                                <AiFillDollarCircle className=" text-3xl" />
                                <span className="font-bold text-3xl">{price}</span>
                            </div>
                            <p>Category: <span className="font-medium">{category}</span></p>
                        </div>
                        <button  className="btn bg-[#0BE58A] mt-4 w-full font-semibold rounded-3xl">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Amazon;
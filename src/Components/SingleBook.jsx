import { CiLocationOn } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { MdInsertPageBreak } from "react-icons/md";
import { Link} from "react-router-dom"
import PropTypes from 'prop-types'



const SingleBook = ({ book }) => {
    const {id, name, image, author, category, tags, rating, pages, publisher, yearOfPublishing } = book || {}
    return (
        <div className="mt-8">
            <div className="flex items-start border-[1px] rounded-2xl">
                <div className="flex flex-col lg:flex-row ">
                    <img className="p-4 w-[300px] lg:w-36 rounded-3xl" src={image} alt="" />
                    <div className="mt-5 px-3 pb-2">
                        <div className="space-y-2">
                            <h3 className="text-xl font-extrabold">{name}</h3>
                            <p>By : {author}</p>
                            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 mt-6 ">
                                <div className="font-extrabold flex gap-3 pr-5 text-primary-color">Tag
                                    <ul className="flex  gap-3 ">
                                        {
                                            tags.map((tag, i) => <li key={i} className="text-[#23BE0A] font-medium px-2 bg-[#23BE0A0D] rounded-full">{tag}</li>)
                                        }
                                    </ul>
                                </div>
                                <div className="flex items-center">
                                    <CiLocationOn className="pr-1 text-xl" /> <span>Year of Publishing: {yearOfPublishing}</span>
                                </div>
                            </div>
                            <div className="flex gap-2 lg:gap-5">
                                <div className="flex items-center">
                                    <BsPerson className="pr-1 text-xl" />
                                    <span>Publisher: {publisher}</span>
                                </div>
                                <div className="flex items-center">
                                    <MdInsertPageBreak className="pr-1 text-xl" />
                                    <span>Page: {pages}</span>
                                </div>
                            </div>
                            <div className="grid lg:grid-cols-3 grid-cols-2 gap-3 text-center">
                                <p className="bg-[#328EFF26] text-[#328EFF] px-2 rounded-full">Category : {category}</p>
                                <p className="bg-[#FFAC3326] text-[#FFAC33] px-2 rounded-full">Rating : {rating}</p>
                                <Link to={`/booksDetails/${id}`} className="text-white font-medium px-2 bg-[#23BE0A] rounded-full">View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

SingleBook.propTypes = {
    book: PropTypes.object.isRequired,
}

export default SingleBook;
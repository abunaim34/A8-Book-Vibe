import { TiStarOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const Book = ({book}) => {
    const {id, name, author, image, rating, category, tags} = book || {};
    return (
        <Link to={`/booksDetails/${id}`} className="max-w-xs p-6 flex flex-col flex-grow rounded-md shadow-lg dark:bg-gray-50 dark:text-gray-900">
            <img src={image} alt="" className=" object-center w-full shadow-2xl rounded-md h-[230px] dark:bg-gray-500" />
            <div className="mt-6 mb-2 space-y-4 border-b-2 pb-5 border-dashed">
                <ul className="flex gap-3 ">
                    {
                        tags.map((tag, i) => <li key={i} className="text-[#23BE0A] font-medium px-2 bg-[#23BE0A0D] rounded-full">{tag}</li>)
                    }
                </ul>
                <h2 className="text-2xl font-bold tracking-wide">{name}</h2>
                <p>By : {author}</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="font-medium">{category}</p>
                <div className="flex items-center gap-1">
                    <span className="font-medium">{rating}</span>
                    <TiStarOutline></TiStarOutline>
                </div>
            </div>
        </Link>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired,
  }

export default Book;
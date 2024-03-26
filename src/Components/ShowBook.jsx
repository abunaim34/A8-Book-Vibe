import PropTypes from 'prop-types'

const ShowBook = ({ book }) => {
    const { name, image, author, category, review, tags, rating, pages, publisher, yearOfPublishing } = book || {}
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl lg:space-x-14">
            <div className=" w-[573px] h-[700px]">
                <figure><img className="w-[425px] h-[630px] rounded-3xl" src={image} alt="Album" /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title mb-5 font-bold text-3xl">{name}</h2>
                <p className="font-medium text-xl ">By : {author}</p>
                <p className="font-medium text-xl pt-3 border-y"> {category}</p>
                <div className="pt-0">
                    <span className="font-bold text-black">Review: </span> <span>{review}</span>
                </div>
                <div className="flex">
                    <span className="font-bold text-black pr-2">Tag : </span>
                    <ul className="flex gap-3 ">
                        {
                            tags.map((tag, i) => <li key={i} className="text-[#23BE0A] font-medium px-2 bg-[#23BE0A0D] rounded-full">{tag}</li>)
                        }
                    </ul>
                </div>
                <div className="flex gap-12 border-t">
                    <div className="text-[#131313B3]">
                        <p>Number of Pages:</p>
                        <p>Publisher:</p>
                        <p>Year of Publishing:</p>
                        <p>Rating:</p>
                    </div>
                    <div className="text-black">
                        <h2 className="font-bold">{pages}</h2>
                        <h1 className="font-bold">{publisher}</h1>
                        <h1 className="font-bold">{yearOfPublishing}</h1>
                        <h1 className="font-bold">{rating}</h1>
                    </div>
                </div>
                <div className="mt-8 space-x-4">
                    <a href="#_" className="relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-black transition-all duration-500 border border-gray-200 rounded-md cursor-pointer group ease bg-gradient-to-b from-white to-gray-50 hover:from-gray-50 hover:to-white active:to-white">
                        <span className="w-full h-0.5 absolute bottom-0 group-active:bg-transparent left-0 bg-gray-100"></span>
                        <span className="h-full w-0.5 absolute bottom-0 group-active:bg-transparent right-0 bg-gray-100"></span>
                        Read
                    </a>

                    <a href="#_" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500">

                        <span className="relative">Wishlist</span>
                    </a>
                </div>

            </div>
        </div>
    );
};

ShowBook.propTypes = {
    book: PropTypes.object
}

export default ShowBook;
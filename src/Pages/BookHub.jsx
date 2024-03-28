import { FaStarHalfStroke } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import { MdFindInPage } from "react-icons/md";


const BookHub = () => {
    const books = useLoaderData()
    console.log(books);
    return (
        <div className="lg:mx-28 mt-9">
            <div className="bg-[#1313130D] rounded-2xl text-center">
                <h2 className="lg:text-3xl text-2xl font-bold py-8 text-black">Rokomari Book shop</h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-7 grid-cols-1 mt-6">
                {
                    books.map((b, i) => <div key={i} className="card bg-base-100 shadow-xl">
                    <figure className="lg:px-10 pt-10">
                        <img src={b.image} alt="Shoes" className="rounded-xl h-[250px] w-[250px] lg:w-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{b.name}</h2>
                        <p>By : {b.author}</p>
                        <div className="flex justify-between gap-10 lg:gap-16">
                            <p className="font-medium">{b.category}</p>
                            <p className="flex items-center"><FaStarHalfStroke /> <FaStarHalfStroke /><FaStarHalfStroke className="pr-1 " /> <span className="font-medium">{b.rating}</span></p>
                            <p className="flex items-center"><MdFindInPage className="pr-1" /> <span className="font-medium">{b.pages}</span></p>
                        </div>
                        <div className="flex justify-between gap-10 lg:gap-28 border-t-2 pt-3 border-dashed">
                            <h1 className="font-bold">Taka. {b.price}</h1>
                            <h1 className="font-bold">Discount. {b.discountedPrice}</h1>
                        </div>
                        <button className="btn btn-primary bg-[#23BE0A] w-full font-extrabold border-none ">Pruccess</button>
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default BookHub;
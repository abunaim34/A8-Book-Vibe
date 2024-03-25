import { TiStarOutline } from "react-icons/ti";

const Book = ({book}) => {
    const {name, author, image, rating, category, tags} = book;
    return (
        <div className="max-w-xs p-6 flex flex-col flex-grow rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
            <img src={image} alt="" className=" object-center w-full rounded-md h-[230px] dark:bg-gray-500" />
            <div className="mt-6 mb-2 space-y-4 border-b-2 pb-5 border-dashed">
                <div className="flex gap-3 ">
                    {
                        tags.map(tag => <a key={tag.id} href="#" className="text-[#23BE0A] font-medium px-2 bg-[#23BE0A0D] rounded-full">{tag}</a>)
                    }
                    {/* <a href="#" className="text-[#23BE0A] font-medium px-2 bg-[#23BE0A0D] rounded-full">Identy</a>
                    <a href="#" className="text-[#23BE0A] font-medium px-2 bg-[#23BE0A0D] rounded-full">kochu</a> */}
                </div>
                <h2 className="text-2xl font-bold tracking-wide">{name}</h2>
                <p>By : {author}</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="font-medium">{category}</p>
                <div className="flex items-center gap-4">
                    <span className="font-medium">{rating}</span>
                    <TiStarOutline></TiStarOutline>
                </div>
            </div>
        </div>
    );
};

export default Book;
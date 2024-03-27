import { useLoaderData } from "react-router-dom";
import Amazon from "../Components/Amazon";


const AmazonBooks = () => {
    const amazons = useLoaderData()
    // console.log(amazons);
    return (
        <div className="lg:mx-28 mt-9">
            <div className="bg-[#1313130D] rounded-2xl text-center">
                <h2 className="text-3xl font-bold py-8 text-black">Our Collections</h2>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 mt-12">
                {
                    amazons.map((a, i) => <Amazon key={i} amazon={a}></Amazon>)
                }
                {/* <Amazon></Amazon> */}
            </div>
        </div>
    );
};

export default AmazonBooks;
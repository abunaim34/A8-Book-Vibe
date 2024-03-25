import Navber from "../Components/Navber";
import { Outlet } from "react-router-dom"


const Root = () => {
    return (
        <div className="mt-10">
            <div className="lg:mx-28">
                <Navber></Navber>
            </div>
            <div className="">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const MobileNavLinks = () => {
    return(
        <>
        <Link to="user-profile" className="flex bg-white items-center font-bold hover:text-orange-500">
            User Profile
        </Link>
        <Button className="flex item-center px-3 font-bold hover:bg-gray-500">
            Logout
        </Button>
        </>
    )
}

export default MobileNavLinks;
import { Link } from "react-router-dom";

const Option = () => {
    return(
        <div className="flex flex-wrap justify-center text-white  gap-5  my-24 w-80 mx-auto">
            <Link to="/admin/novel">
            <div className="  border-2 py-5 px-5 hover:bg-sky-700">
                <img className="w-24" src="https://cdn-icons-png.flaticon.com/512/7293/7293145.png" alt="Add a novel"/>
                <h2>Novel</h2>
            </div>
            </Link>

            <Link to="/admin/annoucement">
            <div className=" border-2 py-5 px-5 hover:bg-sky-700">
                <img className="w-24" src="https://cdn-icons-png.flaticon.com/512/1632/1632602.png" alt="Add a novel"/>
                <h2>Announcement</h2>
            </div>
            </Link>

        </div>
    )

}

export default Option;
import logo from "../Images/logo.png";
import user from "../Images/user.png";
import { Link } from "react-router-dom";

const Header = () => {

    return(

        <div className= "flex bg-[#272727] w-full h-10 items-center justify-center font-roboto">
            <div className="text-white flex w-1/2">
                <Link to="/"><img className ="w-10"src={logo} alt ="Main Logo" /></Link>
                <Link to="/"><h1 className="mr-5">CLOUDSKY</h1></Link>
                <ul className="flex text-xs gap-5  my-1">
                    <Link to="/series"><li>Series</li></Link>
                    <Link to=""><li>Bookmarks</li></Link>
                    <Link to=""><li>Resources</li></Link>
                    <Link to="/admin"><li>Admin</li></Link>

                </ul>
            </div>
            <div className="flex items-center bg-[#272727]" >
                <input className="h-5 w-36 border border-solid border-white rounded-lg bg-black text-white" type="text"/>
                <img className="w-7" src={user} alt="profile"></img>
            </div>
        </div>
    )
}

export default Header;
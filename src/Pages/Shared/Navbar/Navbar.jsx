import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaUser,FaRegBookmark  } from 'react-icons/fa';
import useSelectClass from "../../../Components/Hooks/useSelectClass";
// import useAdmin from "../../../Components/Hooks/useAdmin";
// import useInstructor from "../../../Components/Hooks/useInstructor";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [select] = useSelectClass()
    // const [isAdmin] = useAdmin()
    // const [ isInstructor ] = useInstructor()

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructors'>Instrouctors</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
{/* {
    isAdmin ? <li><Link to='/dashboard/allusers'>Dashboard</Link></li>:
    <li><Link to='/dashboard/additem'>Dashboard</Link></li>
   
} */}

{/* {
    isAdmin ? <li><Link to='/dashboard/allusers'>Dashboard</Link></li>: <>
    {
        isInstructor ? <li><Link to='/dashboard/allusers'>Dashboard</Link></li>:
       <></>
    }
    </>
} */}
        {
            user ?
                <div className="flex items-center">
                    <Link to='/dashboard/myselectedclass'>
                    <button className="btn">
                        <FaRegBookmark></FaRegBookmark>
                        <div className="badge badge-secondary">+{select?.length || 0}</div>
                    </button>
                    </Link>
                    <span className="text-2xl"><FaUser></FaUser></span>
                    <button onClick={handleLogOut} className="btn btn-ghost">logout</button>
                </div> :
                <><li><Link to='/login'>Login</Link></li></>
        }
    </>
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost text-xl uppercase">Language school</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">get started</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
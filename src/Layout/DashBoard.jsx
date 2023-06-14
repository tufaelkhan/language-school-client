import { Outlet, Link } from "react-router-dom";
import { FaBookmark, FaRenren, FaPaypal, FaHome, FaChalkboardTeacher, FaLanguage, FaUsers, FaDatabase, FaPlusSquare, FaSwatchbook,FaPaperPlane  } from 'react-icons/fa';
import useAdmin from "../Components/Hooks/useAdmin";
import useInstructor from "../Components/Hooks/useInstructor";

const DashBoard = () => {
  // TODO: Load the dynamic data from server on role base
  // const isAdmin = true;
  // const isInstructor = false;
  const [ isAdmin ] = useAdmin()
  const [ isInstructor ] = useInstructor()
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full text-base-content">
          {/* dynamic role dashboard content here */}
          {
            isAdmin ? <>
              <li className="flex text-2xl font-semibold my-3">
                <Link to='/dashboard/manageclass'><FaDatabase>
                </FaDatabase>Manage Classes</Link></li>
              <li className="flex text-2xl font-semibold my-3">
                <Link to='/dashboard/allusers'><FaUsers>
                </FaUsers> Manage Users</Link></li>
              
            </> : <>
              {
                isInstructor ? <>
              <li className="flex text-2xl font-semibold my-3">
                      <Link to='/dashboard/additem'><FaPlusSquare>
                      </FaPlusSquare>Add A Class</Link></li>
                    <li className="flex text-2xl font-semibold my-3">
                      <Link to='/dashboard/myallclass'><FaSwatchbook>
                      </FaSwatchbook> My  All Classes</Link></li>
                    <li className="flex text-2xl font-semibold my-3">
                      <Link to='/dashboard/myselectedclass'><FaUsers>
                      </FaUsers> Total Enrolled</Link></li>
                    <li className="flex text-2xl font-semibold my-3">
                      <Link to='/dashboard/myselectedclass'><FaPaperPlane>
                      </FaPaperPlane> FeedBack</Link></li>
                </> :
                  <>
                    <li className="flex text-2xl font-semibold my-3">
                      <Link to='/dashboard/myselectedclass'><FaBookmark>
                      </FaBookmark>My Selected Classes</Link></li>
                    <li className="flex text-2xl font-semibold my-3">
                      <Link to='/dashboard/enrolledclass'><FaRenren>
                      </FaRenren> My Enrolled Classes</Link></li>
                    <li className="flex text-2xl font-semibold my-3">
                      <Link to='/dashboard/history'><FaPaypal>
                      </FaPaypal> My Payment History</Link></li>
                  </>
              }
            </>
          }


          {/* static dashboard */}
          <div className="divider"></div>
          <li className="flex text-2xl font-semibold my-3">
            <Link to='/'><FaHome></FaHome> Home</Link></li>
          <li className="flex text-2xl font-semibold my-3">
            <Link to='/instructors'><FaChalkboardTeacher>
            </FaChalkboardTeacher> Instrouctors</Link></li>
          <li className="flex text-2xl font-semibold my-3"><Link to='/classes'><FaLanguage></FaLanguage> Classes</Link></li>
        </ul>

      </div>
    </div>
  );
};

export default DashBoard;
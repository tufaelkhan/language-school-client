
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Components/Hooks/useAuth";
import useAdmin from "../Components/Hooks/useAdmin";

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth()
    const [ isAdmin, isAdminLoading ] = useAdmin()
    const location = useLocation()
    if(loading || isAdminLoading){
        return <div className="justify-center mt-20 mx-auto"><span className="loading loading-dots loading-lg"></span></div>
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default AdminRoute;
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Components/Hooks/useAuth";
import useInstructor from "../Components/Hooks/useInstructor";

const InstructorRoute = ({children}) => {
    const {user, loading} = useAuth()
    const [ isInstructor, isInstructorLoading] = useInstructor()
    const location = useLocation()
    if(loading || isInstructorLoading){
        return <div className="justify-center mt-20 mx-auto"><span className="loading loading-dots loading-lg"></span></div>
    }
    if(user && isInstructor){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default InstructorRoute;
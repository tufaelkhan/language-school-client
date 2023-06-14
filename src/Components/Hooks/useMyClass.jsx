
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useMyClass = () =>{
    const {user, loading } = useAuth()
    // const token = localStorage.getItem('access-token')
    const [axiosSecure] = useAxiosSecure()


    const { refetch, data: myclass = [] } = useQuery({
        queryKey: ['myclass', user?.email],
        enabled: !loading,
        queryFn: async()=>{
            const res = await axiosSecure(`/myclass?email=${user?.email}`)
            return res.data;
        }
      })
      return [myclass, refetch]
}
export default useMyClass;
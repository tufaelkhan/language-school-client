
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useSelectClass = () =>{
    const {user, loading } = useAuth()
    // const token = localStorage.getItem('access-token')
    const [axiosSecure] = useAxiosSecure()


    const { refetch, data: select = [] } = useQuery({
        queryKey: ['selects', user?.email],
        enabled: !loading,
        // queryFn: async()=>{
        //     const res = await fetch(`http://localhost:5000/selects?email=${user?.email}`,{ headers: {
        //         authorization: `bearer ${token}`
        //     }})
        //     return res.json()
        // }
        // enabled: !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async()=>{
            const res = await axiosSecure(`/selects?email=${user?.email}`)
            return res.data;
        }
      })
      return [select, refetch]
}
export default useSelectClass;
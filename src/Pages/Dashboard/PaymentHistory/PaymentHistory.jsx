import { useEffect, useState } from "react";
import useAuth from "../../../Components/Hooks/useAuth";


const PaymentHistory = () => {
    const {user} = useAuth()
    const [paymentHistory, setPaymentHistory] = useState([])
    useEffect(() => {
        fetch(`https://language-school-server-nine.vercel.app/payments/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setPaymentHistory(data)
            })
    }, [user?.email])
    return (
        <div className=" w-full px-12">
            <div className="overflow-x-auto rounded-t-2xl">
                <table className="table table-zebra ">
                   
                    <thead className="">
                        <tr className=" bg-sky-500">
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Email</th>
                            <th>Transaction ID</th>
                        </tr>
                    </thead>
                    <tbody className=" bg-sky-300 font-semibold">
                    {
                        paymentHistory && paymentHistory.map((item,i) =>  <tr key={item._id}>
                            <td>{i+1}</td>
                            <td>{item?.className}</td>
                            <td>${item?.enrolledClass?.price}</td>
                            <td>{item?.email}</td>
                            <td>{item?.transactionId}</td>
                        </tr>)
                    }
                       
                      
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default PaymentHistory;
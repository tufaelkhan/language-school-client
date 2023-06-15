import { Helmet } from "react-helmet-async";
import useSelectClass from "../../../Components/Hooks/useSelectClass";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaWallet } from 'react-icons/fa';
import Swal from "sweetalert2";

const MySelectedClass = () => {
    const [select, refetch] = useSelectClass()
    console.log(select);
    const total = select.reduce((sum, item)=> sum + item.price, 0)
    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to delete this class!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/selects/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your class has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }
    return (
        <div className="w-full">
            <Helmet>
                <title>Language school || selected Classes</title>
            </Helmet>
            <div className="flex justify-between">
            <h2 className="text-3xl text-center uppercase">Your selectd classes: {select.length}</h2>
            <h2 className="text-3xl text-center uppercase">Total Amount: {total}</h2>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-2xl">
                                <th># </th>
                                <th>Class</th>
                                <th>Class Name</th>
                                <th>Price</th>
                                <th>Pay</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                select.map((item, index) => <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.classImage} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.className}
                                    </td>
                                    <td>
                                        {item.price}
                                    </td>
                                    <td><Link state={item} to={`/dashboard/payment/${item._id}`}> <button className="btn-secondary text-2xl p-2 btn rounded"><FaWallet/> pay</button></Link></td>
                                    <td className="text-white">
                                        <button onClick={() => handleDelete(item)} className="btn btn-ghost text-2xl  bg-red-500"><FaTrashAlt></FaTrashAlt></button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MySelectedClass;
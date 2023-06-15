import { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useSelectClass from "../../Components/Hooks/useSelectClass";
import Animation from "../Home/Banner/Animation";
import { Slide } from "react-awesome-reveal";

const Classes = () => {
    const [classes, setClasses] = useState([])
    const { user } = useContext(AuthContext)
    const [, refetch] = useSelectClass()
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                setClasses(data)
            })
    }, [])
    const handleSelectClass = item => {
        // console.log(item);
        if (user && user.email) {
            const classItem = { classId: item._id, className: item.name, classImage: item.classImg, price: item.price, seats: item.seats, name: user.name, email: user.email }
            fetch('http://localhost:5000/selects', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(classItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'class added on your select classes',
                            showConfirmButton: false,
                            timer: 1000
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'please login then select class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, login now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className="mb-16">
            <Helmet>
                <title>Language school || Classes </title>
            </Helmet>
            <Slide>
                <img className="w-full mb-10" src="https://images.pexels.com/photos/10646410/pexels-photo-10646410.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </Slide>
            <SectionTitle heading='our all classes here'></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6">
                {
                    classes.map((item) => <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
                        <Slide>
                            <figure><img src={item.image || item.classImg} className="p-2 rounded" alt="Shoes" /></figure>
                        </Slide>
                        <h3 className="text-center text-3xl"><span className="text-blue-500 mr-2"> ${item.price}</span></h3>
                        <div className="card-body">
                            <h2 className="card-title">{item.name}</h2>
                            <p>Instructor: {item.teacher}</p>
                            <div className="flex justify-between">
                                <p>Available Seats {item.seats}</p>
                            </div>
                            <div className="card-actions justify-between">
                                <p className="flex"> <Rating
                                    style={{ maxWidth: 100 }}
                                    value={item.rating}
                                    readOnly
                                />{item.rating}</p>
                                <button onClick={() => handleSelectClass(item)} className="btn btn-primary hover:bg-orange-500 border-0">Select Course <FaArrowRight></FaArrowRight> </button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <Animation></Animation>
        </div>
    );
};

export default Classes;
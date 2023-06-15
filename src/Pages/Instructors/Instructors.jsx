import { useEffect, useState } from "react";
import { FaArrowRight} from 'react-icons/fa';
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";

const Instructors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('https://language-school-server-nine.vercel.app/teachers')
            .then(res => res.json())
            .then(data => {
                setInstructors(data)
            })
    }, [])
    return (
        <div className="mb-16">
            <Helmet>
                <title>Language school || Instructors </title>
            </Helmet>
            <img className="w-full mb-10" src="https://images.pexels.com/photos/8197531/pexels-photo-8197531.jpeg?auto=compress&cs=tinysrgb&w=600?auto=compress&cs=tinysrgb&w=600" alt="" />
        <SectionTitle heading='our great instructors'></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6">
            {
                instructors.map((item) => <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={item.instructorImg} className="p-2 rounded" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{item.name}</h2>
                        <p className="text-2xl font-sans font-semibold">Instructor: {item.instructor}</p>
                        <div className="flex justify-between">
                        <p>Available Seats {item.available}</p>
                        </div>
                        <div className="card-actions justify-between">
                        <p>Email: {item.email}</p>
                            <button className="btn btn-primary">Read More <FaArrowRight></FaArrowRight> </button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    </div>
    );
};

export default Instructors;
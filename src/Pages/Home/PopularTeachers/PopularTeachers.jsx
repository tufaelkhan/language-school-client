import { useEffect, useState } from "react";
import { FaArrowRight} from 'react-icons/fa';
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Slide } from "react-awesome-reveal";

const PopularTeachers = () => {
    const [teachers, setTeachers] = useState([])
    useEffect(() => {
        fetch('https://language-school-server-nine.vercel.app/teachers')
            .then(res => res.json())
            .then(data => {
                const popularClassses = data.filter(item => item.category === 'popular')
                setTeachers(popularClassses)
            })
    }, [])
    return (
        <div className="mb-16">
        <SectionTitle heading='our popular teachers'></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6">
            {
                teachers.map((item) => <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
        <Slide>
                    <figure><img src={item.instructorImg} className="p-2 rounded" alt="Shoes" /></figure>
        </Slide>
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

export default PopularTeachers;
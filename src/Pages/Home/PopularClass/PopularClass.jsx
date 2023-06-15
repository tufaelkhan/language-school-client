import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { FaArrowRight, FaPlayCircle } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Slide } from "react-awesome-reveal";

const PopularClass = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                const popularClassses = data.filter(item => item.category === 'popular')
                setClasses(popularClassses)
            })
    }, [])
    return (
        <div className="mb-16">
            <SectionTitle heading='our popular classes'></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6">
                {
                    classes.map((item) => <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
        <Slide>
<figure><img src={item.image} className="p-2 rounded" alt="Shoes" /></figure>
        </Slide>
                        <h3 className="text-center text-3xl"><span className="text-blue-500 mr-2"> ${item.price}</span>/Lifetime</h3>
                        <div className="card-body">
                            <h2 className="card-title">{item.name}</h2>
                            <p>Instructor: {item.teacher}</p>
                            <div className="flex justify-between">
                                <p className="flex items-center"><span className="text-blue-500 mr-2"><FaPlayCircle></FaPlayCircle></span> {item.lessons} Lessons</p>
                                <p>Seats {item.seats}</p>
                            </div>
                            <div className="card-actions justify-between">
                                <p className="flex"><Rating
                                    style={{ maxWidth: 100 }}
                                    value={item.rating}
                                    readOnly
                                />{item.rating}</p>
                                <button className="btn btn-primary">Enroll Now <FaArrowRight></FaArrowRight> </button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularClass;
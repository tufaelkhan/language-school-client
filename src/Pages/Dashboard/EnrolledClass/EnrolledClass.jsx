import useAuth from "../../../Components/Hooks/useAuth";
import { useState, useEffect } from "react";

const EnrolledClass = () => {
    const {user} = useAuth()
    const [enrolled, setEnrolled] = useState([])
    console.log(enrolled);
    useEffect(() => {
        fetch(`http://localhost:5000/payments/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setEnrolled(data)
            })
    }, [user?.email])
    return (
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 px-12 mt-10">
                {
                    enrolled && enrolled.map((clas, i) => <div key={i} className="card card-compact w-full bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title font-bold">{clas?.className} Class</h2>
                            <p className=" text-xl ">Student Email: {clas?.email}</p>
                            <p className=" text-xl ">Class ID: {clas?.classId}</p>
                            
                            <div className="card-actions "></div>
                            <h1 className=" text-xl">Status: <span className=" text-blue-700 font-bold">Enrolled </span></h1>
                            </div>
                        </div>)
                }
                </div>
    );
};

export default EnrolledClass;
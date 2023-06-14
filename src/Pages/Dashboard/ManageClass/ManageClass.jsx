import useClass from "../../../Components/Hooks/useClass";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const ManageClass = () => {
    const [classes, ] = useClass()
    return (
        <div className="w-full mt-4">
            <SectionTitle heading='manage all class'></SectionTitle>
            <div className="grid md:grid-cols-1 lg:grid-cols-2">
                {
                    classes.map(item => <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={item.image || item.classImg} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.name}</h2>
                            <p>Teacher Name: {item.teacher}</p>
                            <p>Teacher Email {item.email}</p>
                            <p>Available seats: {item.seats}</p>
                            <p>Price: {item.price}</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Approve</button>
                                <button className="btn btn-secondary">Pending</button>
                                <button className="btn btn-gost">Deny</button>
                                <button className="btn btn-info">feedback</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageClass;
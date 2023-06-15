import { Helmet } from "react-helmet-async";
import useMyClass from "../../../Components/Hooks/useMyClass";
import { Link } from "react-router-dom";

const MyAllClass = () => {
    const [ myclass] = useMyClass()
    // console.log(myclass);
    return (
        <div>
            <Helmet>
                <title>Language school || my Classes</title>
            </Helmet>
            <h2 className="text-3xl text-center uppercase">my classes: {myclass.length}</h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-2">
                {
                    myclass.map(item => <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={item.image || item.classImg} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.name}</h2>
                            <p>Available seats: {item.seats || item.seats}</p>
                            <p>Price: {item.price}</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Approve</button>
                                <button className="btn btn-secondary">Pending</button>
                                <button className="btn btn-gost">Deny</button>
                                <button className="btn btn-info">feedback</button>
                                <Link to={`myclass/$`}><button className="btn btn-primary">update</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyAllClass;
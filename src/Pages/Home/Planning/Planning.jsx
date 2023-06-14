import { FaArrowRight, FaMobileAlt, FaBookOpen, FaHeadphones, FaBusinessTime } from 'react-icons/fa';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const Planning = () => {
    return (
        <div>
            <SectionTitle heading='our special flexiable planning'></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="card w-96 bg-base-100 shadow-xl m-4">
                    <h3 className="mb-2 text-2xl font-semibold text-center">Standar User</h3>
                    <h3 className="mb-2 text-2xl text-blue-500 font-semibold text-center">$ 49.00/month</h3>
                    <div className="divider"></div>
                    <div className="card-body text-center">
                        <p className='flex items-center '><FaArrowRight></FaArrowRight><span className='ml-3'>3 Language In A Month</span></p>
                        <p className='flex items-center'><FaArrowRight></FaArrowRight> 
                        <span className='ml-3'>10 Excercise In A Day</span></p>
                        <p className='flex items-center'><FaArrowRight></FaArrowRight> 
                        <span className='ml-3'>5 Live Speaking</span> </p>
                        <p className='flex items-center'><FaArrowRight></FaArrowRight> 
                        <span className='ml-3'>Get Certificated</span> </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Book Now <FaArrowRight></FaArrowRight> </button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl m-4">
                    <h3 className="mb-2 text-2xl font-semibold text-center">Diamond User</h3>
                    <h3 className="mb-2 text-2xl text-blue-500 font-semibold text-center">$ 99.00/month</h3>
                    <div className="divider"></div>
                    <div className="card-body text-center">
                        <p className='flex items-center '><FaArrowRight></FaArrowRight><span className='ml-3'>10 Language In A Month</span></p>
                        <p className='flex items-center'><FaArrowRight></FaArrowRight> 
                        <span className='ml-3'>20 Excercise In A Day</span></p>
                        <p className='flex items-center'><FaArrowRight></FaArrowRight> 
                        <span className='ml-3'>Achievement Award</span> </p>
                        <p className='flex items-center'><FaArrowRight></FaArrowRight> 
                        <span className='ml-3'>15 Live Speaking</span> </p>
                        <p className='flex items-center'><FaArrowRight></FaArrowRight> 
                        <span className='ml-3'>Get Certificated</span> </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Book Now <FaArrowRight></FaArrowRight> </button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl m-4">
                    <h3 className="mb-2 text-2xl font-semibold text-center">primium User</h3>
                    <h3 className="mb-2 text-2xl text-blue-500 font-semibold text-center">$ 79.00/month</h3>
                    <div className="divider"></div>
                    <div className="card-body text-center">
                        <p className='flex items-center '><FaArrowRight></FaArrowRight><span className='ml-3'>5 Language In A Month</span></p>
                        <p className='flex items-center'><FaArrowRight></FaArrowRight> 
                        <span className='ml-3'>15 Excercise In A Day</span></p>
                        <p className='flex items-center'><FaArrowRight></FaArrowRight> 
                        <span className='ml-3'>10 Live Speaking</span> </p>
                        <p className='flex items-center'><FaArrowRight></FaArrowRight> 
                        <span className='ml-3'>Get Certificated</span> </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Book Now <FaArrowRight></FaArrowRight> </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ml-5 grid grid-cols-2 md:grid-cols-4'>
                <h3 className='text-2xl flex items-center mt-7 mb-7 mr-4 font-sans'><FaMobileAlt></FaMobileAlt> <span>Online Tutoring</span></h3>
                <h3 className='text-2xl flex items-center mt-7 mb-7 mr-6 font-sans'><FaBookOpen></FaBookOpen> <span>Provide Handnote</span></h3>
                <h3 className='text-2xl flex items-center mt-7 mb-7 mr-4 font-sans'><FaHeadphones></FaHeadphones> <span>Online Support</span></h3>
                <h3 className='text-2xl flex items-center mt-7 mb-7 mr-4 font-sans'><FaBusinessTime></FaBusinessTime> <span>24/7 Support</span></h3>
            </div>
        </div>
    );
};

export default Planning;
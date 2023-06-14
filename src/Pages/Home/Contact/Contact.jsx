import { FaMobileAlt, FaMailBulk, FaWhatsapp, FaPinterestP } from 'react-icons/fa';
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Contact = () => {
    return (
        <div>
        <SectionTitle heading='contact with us'></SectionTitle>
<div className='text-center bg-slate-600 text-white'>
    <h2 className='text-3xl font-bold'>Any Time Contact</h2>
    <div className='grid grid-cols-2 md:grid-cols-4 mt-6 mb-12'>
        <h3 className='flex items-center p-4 text-1xl font-semibold'><span><FaMobileAlt></FaMobileAlt></span> <span>+34879653416546</span></h3>
        <h3 className='flex items-center p-6 text-1xl font-semibold'><span><FaMailBulk></FaMailBulk></span> <span>mail@gmail.com</span></h3>
        <h3 className='flex items-center p-6 text-1xl font-semibold'><span><FaWhatsapp></FaWhatsapp></span> <span>54657485452165885</span></h3>
        <h3 className='flex items-center p-6 text-1xl font-semibold'><span><FaPinterestP></FaPinterestP></span> <span>contact</span></h3>
    </div>
</div>
    </div>
    );
};

export default Contact;
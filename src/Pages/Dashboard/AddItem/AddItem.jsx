import Swal from "sweetalert2";
import useAuth from "../../../Components/Hooks/useAuth";
import useAxiosSecure from "../../../Components/Hooks/useAxiosSecure";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';

const img_hosting_token=import.meta.env.VITE_Image_Upload_token;
const AddItem = () => {
    const [axiosSecure] = useAxiosSecure()
    const {user} = useAuth()
    const { register, handleSubmit, } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {
        console.log(data);
      
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url,{
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgRes =>{
            console.log(imgRes);
            
            if(imgRes.success){
                const imgURL = imgRes.data.display_url;
                
                const {name, price, teacher, email, seats}  = data;
                const newClass = {name, price: parseFloat(price), teacher, email, seats, classImg: imgURL} 
                console.log(newClass);
                axiosSecure.post('/classes', newClass)
                .then(data =>{
                    console.log('after backend post new class', data.data);
                    if(data.data.insertedId){
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your class added',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })
        };
        // console.log(errors);
        // console.log(img_hosting_token);
    return (
        <div className="w-full">
            <SectionTitle heading='Add Your New Class'></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name*</span>
                    </label>
                    <input type="text" placeholder="class name"  {...register("name", {required: true, maxLength: 120})} className="input input-bordered w-full" />
                </div>
                <div className="flex mb-4">
                <div className="form-control w-full mr-4">
                    <label className="label">
                        <span className="label-text font-semibold">Price*</span>
                    </label>
                    <input type="number" {...register("price", { required: true })} placeholder="type your class price" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Seats *</span>
                    </label>
                    <input type="number" {...register("seats", { required: true })} placeholder="availabel seats" className="input input-bordered w-full" />
                </div>
                </div>
               <div className="flex">
               <div className="form-control w-full mr-4">
                    <label className="label">
                        <span className="label-text font-semibold">name *</span>
                    </label>
                    <input type="text" {...register("teacher", { required: true })} defaultValue={ user.displayName } readOnly className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full ml-4">
                    <label className="label">
                        <span className="label-text font-semibold">email *</span>
                    </label>
                    <input type="email" {...register("email", { required: true })} defaultValue={user.email} readOnly className="input input-bordered w-full" />
                </div>
               </div>
                <div className="form-control w-full max-w-xs mb-2">
                    <label className="label">
                        <span className="label-text">class Image</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full"/>
                </div>
                <input type="submit" className="btn btn-secondary mt-4 mb-6" value="Add new class"/>
            </form>
        </div>
    );
};

export default AddItem;
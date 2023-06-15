import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext)
  const navigate = useNavigate()
  const onSubmit = data => {
    console.log(data)
    if (data.password !== data.confirm) {
      return alert('try again confirm password')
    }
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            // console.log('user updated');
            const savedUser = {name: data.name, email: data.email}
            fetch('https://language-school-server-nine.vercel.app/users',{
              method: 'POST',
              headers:{
                'content-type': 'application/json'
              },
              body: JSON.stringify(savedUser)
            })
              .then(res => res.json())
              .then(data => {
                if (data.insertedId) {
                  reset()
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'user created successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate('/')
                }
              })
          })
          .catch(error => console.log(error))
      })
  };
  // .then(() => {
  //     // Profile updated!
  //     // ...
  //   }).catch((error) => {
  //     // An error occurred
  //     // ...
  //   });

  return (
    <>
      <Helmet>
        <title>Language school || signup </title>
      </Helmet>
      <div className="hero bg-base-200">
        <div className="hero-content">
          <div className="card w-full shadow-2xl bg-base-100">
            <h3 className="text-3xl text-center pt-4">Please SignUp</h3>
            <SocialLogin></SocialLogin>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                {errors.name && <span className="text-red-500">Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" {...register("photoURL", { required: true })} placeholder="photoURL" className="input input-bordered" />
                {errors.photoURL && <span className="text-red-500">Photo URL is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                {errors.email && <span className="text-red-500">Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password", { required: true, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} placeholder="password" className="input input-bordered" />
                {errors.password?.type === 'minLength' && <span className="text-red-500">Password must be 6 characters required</span>}
                {errors.password?.type === 'pattern' && <span className="text-red-500">Password must be one uppercase & lowercase & number & special characters required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" {...register("confirm", { required: true })} placeholder="password" className="input input-bordered" />
                {errors.confirm && <span className="text-red-500">Password macth required</span>}
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="signup" />
              </div>
              <p>Already Have An Account<Link to='/login'> <span className="text-red-600">Login?</span></Link></p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
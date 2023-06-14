import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {signIn} = useContext(AuthContext)
    const [passwordShow, setPasswordShow] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';

    const onSubmit = data => {
        // console.log(data)
        signIn(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'User log in successfully',
                showConfirmButton: false,
                timer: 1500
              })
              navigate(from, {replace: true});
        })
    };
    // const togglePassword =()=>{
    //     setPasswordShow(!passwordShow)
    // }
    return (
        <>
        <Helmet>
                <title>Language school || Login </title>
            </Helmet>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h3 className="text-3xl text-center pt-4">Please Login</h3>
            <SocialLogin></SocialLogin>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                <input type={passwordShow ? 'text':"password"} {...register("password", { required: true })} placeholder="password" className="input input-bordered" />
                {errors.password && <span className="text-red-500">Password must be 6characters required</span>}
              </div>
              <div>
                <input onFocus={()=>setPasswordShow(!passwordShow)} type="text" placeholder="show password" />
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Login" />
              </div>
              <p>New To Language School<Link to='/signup'> <span className="text-red-600">Create Account?</span></Link></p>
            </form>
            
          </div>
        </div>
      </div>
        </>
    );
};

export default Login;
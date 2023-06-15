import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useContext } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleLogin} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin = () =>{
        googleLogin()
        .then(result =>{
            const loggedInUser = result.user;
            console.log(loggedInUser);
            const savedUser = {name: loggedInUser.displayName, email: loggedInUser.email}
            fetch('https://language-school-server-nine.vercel.app/users',{
              method: 'POST',
              headers:{
                'content-type': 'application/json'
              },
              body: JSON.stringify(savedUser)
            })
              .then(res => res.json())
              .then(() => {
                    navigate(from, {replace: true})
                })
        })
    }
    return (
        <div className='text-center'>
            <div className="divider"></div>
            <button onClick={handleGoogleLogin} className="btn btn-active btn-primary text-2xl"><FaGoogle></FaGoogle>SignIn With Google</button>
        </div>
    );
};

export default SocialLogin;
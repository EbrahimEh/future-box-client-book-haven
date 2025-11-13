import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
    const {logInUser,googleSignIn} = use(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const newUser = { email, password }
        console.log(newUser)

        logInUser(email,password)
        .then(result =>{
            console.log('user sign in email', result.user)
            toast.success('Login Successfully')

            navigate(from, {replace: true})
        })
        .catch(error =>{
            console.log('error', error.message)
        })
    }

    const handleGoogleSign = () =>{
        googleSignIn()
        .then(result =>{
            console.log('user sign in google', result.user)
            toast.success('Login Successfully')

            navigate(from, {replace: true})
        })
        .catch(error =>{
            console.log('error', error.message)
            toast.error(error.message)
        })
    }
    return (
        <div className='flex justify-center items-center md:h-screen md:mt-0 mt-16'>
            <div className="card bg-base-100 w-full md:py-3 max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="md:text-4xl text-2xl text-center md:py-3 font-bold">Login now!</h1>
                    <form onSubmit={handleLogin}>
                        <fieldset className="fieldset">

                            {/* email */}
                            <label className="label">Email</label>
                            <input type="email" className="input" name='email' placeholder="Email" />

                            {/* Pass */}
                            <label className="label">Password</label>
                            <input type="password" className="input" name='password' placeholder="Password" />

                            <div><a className="link link-hover">Forgot password?</a></div>

                            <button type='submit' className="btn btn-neutral mt-4">Login</button>
                            <button onClick={handleGoogleSign} className="btn bg-[#47698F] text-white border-[#35567b]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>
                        </fieldset>
                        <p className='text-[13px] text-center pt-3'>Don't Have An Account? <span className='text-indigo-500 underline'><Link to='/register'>Register Now</Link></span></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link } from 'react-router';
import {toast,ToastContainer } from 'react-toastify';

const Register = () => {
    const { googleSignIn, createUser, setUser,updateUser } = use(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            toast.error('Password must contain:\n• At least 6 characters\n• One uppercase letter\n• One lowercase letter');
            return; 
        }

        //email
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                e.target.reset()
                toast.success('Register Successfully')

                const newUser = {
                    name: name,
                    email: email,
                    photo: photo,
                }

                //create user in database
                fetch('https://book-haven-server-gold.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                .then(res => res.json())
                .then(data => {
                    console.log('data after save the user', data)
                })

                //update usr
                updateUser({displayName: name, photoURL: photo})
                .then(() => {
                    setUser({...user, displayName: name, photoURL: photo})
                })
                .catch(error =>{
                    console.log(error)
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGoogleSignIn = () => {
        //googleSign In
        googleSignIn()
            .then(result => {
                console.log(result.user);

                const newUser = {
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL,
                }

                //create user in database
                fetch('https://book-haven-server-gold.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                .then(res => res.json())
                .then(data => {
                    console.log('data after save the user', data)
                })
                
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className='flex justify-center items-center md:h-screen md:mt-0 lg:mt-0 mt-16'>
            <div className="card bg-base-100 w-full md:py-3 max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="md:text-4xl text-2xl text-center md:py-3 font-bold">Register now!</h1>
                    <form onSubmit={handleRegister}>
                        <fieldset className="fieldset">
                            {/* Name */}
                            <label className="label">Name</label>
                            <input type="text" className="input" name='name' required placeholder="Your Name" />

                            {/* Photo */}
                            <label className="label">Photo URL</label>
                            <input type="text" className="input" name='photo'  placeholder="Photo URL" />

                            {/* email */}
                            <label className="label">Email</label>
                            <input type="email" className="input" name='email' required placeholder="Email" />

                            {/* Pass */}
                            <label className="label">Password</label>
                            <input type="password" className="input" name='password' required placeholder="Password" />

                            <button type='submit' className="btn btn-neutral mt-4">Register</button>
                            <button onClick={handleGoogleSignIn} className="btn bg-[#47698F] text-white border-[#35567b]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>
                        </fieldset>
                        <p className='text-[13px] text-center pt-3'>Already Have An Account? <span className='text-indigo-500 underline'><Link to='/login'>Login Now</Link></span></p>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;
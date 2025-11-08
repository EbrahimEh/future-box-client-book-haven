import React from 'react';
import { NavLink } from 'react-router';
import bookLogo from '../../assets/book logo.jpg'

const Navbar = () => {
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allbook'>Home</NavLink></li>
        <li><NavLink to='/addbook'>Add Book</NavLink></li>
        <li><NavLink to='/mybooks'>My Books</NavLink></li>

    </>
    return (
        <div className='w-full fixed z-50 top-0 left-0 mx-auto bg-base-100 shadow-sm'>
            <div className="navbar md:max-w-11/12 mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <img className='w-8 h-8 md:w-12 md:h-12 rounded-full' src={bookLogo} alt="" />
                        <a className="text-sm md:text-xl ml-3 font-semibold">Book Haven</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className=" btn border-gray-300 text-blue-500 hover:bg-blue-200 hover:text-black font-medium py-1 px-4 rounded transition duration-200">
                        Sign Up
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
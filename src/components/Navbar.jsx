import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { IoPersonCircle } from "react-icons/io5";
import navLogo from '../assets/nav-logo.png'
import { FirebaseContext } from "../Context/FirebaseProvider";

const Navbar = () => {

  const {user,userLogOut} = useContext(FirebaseContext)
 
  const links = (
    <>
        <li>
        <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
        <NavLink to={"/About"}>About</NavLink>
        </li>
        <li>
        <NavLink to={"/Career"}>Career</NavLink>
        </li>
    </>
  );
  
  const signOutHandler =()=>{
    userLogOut()
  }

  return (
    <div className="my-3 px-6 py-4 flex items-center justify-between">
      <div className="navbar shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-2"
            >
              {links}
            </ul>
          </div>
          <NavLink to={'/'}>
          <img
          className="w-16 h-16 ring-2 ring-neutral rounded-full p-3"
           src={navLogo} alt="navLogo" />
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-6">
          {links}
          </ul>
        </div>
        <div className="navbar-end space-x-4">
                {user ? 
                <div>
                  <img className="w-14 h-14 rounded-full" src={user.photoURL} alt={user.displayName} />
                </div> : <IoPersonCircle size={50}/>}
                {
                  user ?
                  <button
                  onClick={signOutHandler}
                  className={'btn btn-neutral rounded-none'}
                  >Log Out</button>
                   : 
                   <NavLink
                  className={'btn btn-neutral rounded-none'}
                  to={'/Login'}>Login</NavLink>
                }
        </div>
      </div>
    </div>
  );
};

export default Navbar;

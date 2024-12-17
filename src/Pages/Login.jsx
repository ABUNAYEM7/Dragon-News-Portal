import Navbar from "../components/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { FirebaseContext } from "../Context/FirebaseProvider";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  const { SignInUser,user } = useContext(FirebaseContext);
  const {state} = useLocation()
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const email = form.get("email");
    const pass = form.get("pass");
    
    SignInUser(email, pass)
      .then((res) => {
        setError('')
        navigate(state ? state : '/')
      })
      .catch((err) =>{
        handleFirebaseError(err)
      });
  };

  const visibleHandler = () => {
    setVisible(!visible);
  };

 
  const handleFirebaseError = (error) => {
    const errorCode = error?.code || "unknown";
    const errorMessage = error?.message || "An unknown error occurred. Please try again.";
  
    switch (errorCode) {
      case "auth/user-not-found":
        setError("No account found with this email. Please register first.");
        break;
      case "auth/wrong-password":
        setError("Incorrect password. Please try again.");
        break;
      case "auth/invalid-email":
        setError("Invalid email format.");
        break;
      case "auth/invalid-credential":
        setError("Invalid credentials provided. Please check your email or password.");
        break;
      case "auth/network-request-failed":
        setError("Network error. Please check your connection.");
        break;
      case "auth/too-many-requests":
        setError("Too many attempts. Please try again later.");
        break;
      case "auth/weak-password":
        setError("Password is too weak. Please choose a stronger password.");
        break;
      case "unknown":
        setError("An unknown error occurred. Please try again.");
        break;
      default:
        setError(errorMessage);
    }
  };
  

  return (
    <div>
      <Navbar />

      <div className="my-6 flex items-center justify-center w-1/2 mx-auto shadow-xl">
        <form onSubmit={submitHandler} className="card-body">
          <h3 className="text-4xl font-semibold my-3 text-center">
            Login your account
          </h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="pass"
              type={visible ? "text" : "password"}
              placeholder="password"
              className="input input-bordered"
              required
            />

            <p
              onClick={visibleHandler}
              className="p-2 bg-base-300 rounded-full absolute right-3 top-11 cursor-pointer"
            >
              {visible ? <FaRegEye /> : <FaEyeSlash />}
            </p>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <label className="label">
            {error && (
              <p className="text-xs font-medium text-red-600">{error}</p>
            )}
          </label>
          <div className="form-control mt-6">
            <button className="btn bg-[#403F3F] text-white hover:text-[#403F3F]">
              Login
            </button>
          </div>
          <div className="my-3">
            <h3 className="text-base font-semibold text-center">
              Don’t Have An Account ?
              <span className="text-[#FF8C47]">
                <Link state={state} to={"/LogIn/CreateAccount"}> Register</Link>
              </span>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

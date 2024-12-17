import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { FirebaseContext } from "../Context/FirebaseProvider";

const CreateAccount = () => {
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  const { createUser, updateUsersProfile,emailVerification } = useContext(FirebaseContext);
  const { state } = useLocation();
  const navigate = useNavigate();
   // Password validation regex patterns
   const regexLower = /[a-z]/;
   const regexUpper = /[A-Z]/;
   const regexDigit = /\d/;
   const regexSpecial = /[!@#$%^&*(),.?":{}|<>]/;

  const submitHandler = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photoUrl");
    const email = form.get("email");
    const pass = form.get("pass");
    const check = form.get("checkTerms") === "on";

    if (!check) {
      return setError("Please Accept Terms And Condition");
    }
    // Validate password
    if (!regexLower.test(pass)) {
      return setError("Password must contain at least one lowercase letter");
    }
    if (!regexUpper.test(pass)) {
      return setError("Password must contain at least one uppercase letter");
    }
    if (!regexDigit.test(pass)) {
      return setError("Password must contain at least one number");
    }
    if (!regexSpecial.test(pass)) {
      return setError("Password must contain at least one special character");
    }

    createUser(email, pass)
      .then(() => {
        setError("");
        updateUsersProfile({ displayName: name, photoURL: photo }).then(() => {
          navigate(state ? state : "/");
          emailVerification()
        });
      })
      .catch((err) => setError(err.message || err.code));
  };

  const visibleHandler = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <Navbar />
      <div className="my-6 flex items-center justify-center w-1/2 mx-auto shadow-xl">
        <form onSubmit={submitHandler} className="card-body">
          <h3 className="text-4xl font-semibold my-3 text-center">
            Register your account
          </h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photoUrl"
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
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
          </div>
          <div className="form-control">
            <label className="label cursor-pointer justify-start gap-3">
              <input name="checkTerms" type="checkbox" className="checkbox" />
              <span className="label-text">Accept Terms and Conditions</span>
            </label>
          </div>
          <label className="label">
            {error && (
              <p className="text-xs font-medium text-red-600">{error}</p>
            )}
          </label>
          <div className="form-control mt-6">
            <button className="btn bg-[#403F3F] text-white hover:text-[#403F3F]">
              Register
            </button>
          </div>
          <div className="my-3">
            <h3 className="text-base font-semibold text-center">
              Already Have An Account ?
              <span className="text-[#FF8C47]">
                <Link to={"/Login"}> LogIn</Link>
              </span>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;

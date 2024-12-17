import React, { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import {FirebaseContext  } from "../Context/FirebaseProvider";

const SocialBtn = () => {
  const {singInWithGithub,singInWithGoogle} = useContext(FirebaseContext)

    const googleClickHandler =()=>{
      singInWithGoogle()
    }
    const githubClickHandler =()=>{
      singInWithGithub()
    }

  return (
    <div>
      <h3 className="text-xl font-medium">LogIn With</h3>
      <div className="my-3 space-y-2">
        <button
         onClick={googleClickHandler}
         className="btn w-full ">
          <FaGoogle size={20} className="text-[#D72050]"></FaGoogle> Google
        </button>
        <button 
        onClick={githubClickHandler}
        className="btn w-full">
            <FaGithub size={20} className="text-[#D72050]"></FaGithub> GitHub
            </button>
      </div>
    </div>
  );
};

export default SocialBtn;

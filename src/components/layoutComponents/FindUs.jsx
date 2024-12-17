import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div className='my-3'>
      <h3 className='text-xl font-medium'>Find Us On :</h3>
      <div className="my-3">
        <button className="btn w-full justify-start">
          <FaFacebook size={20} className="text-[#D72050]"></FaFacebook> Facebook
        </button>
        <button className="btn w-full justify-start">
            <FaInstagram size={20} className="text-[#D72050]"></FaInstagram> Instagram
        </button>
        <button className="btn w-full justify-start">
            <FaTwitter size={20} className="text-[#D72050]"></FaTwitter> Twitter
        </button>
      </div>
    </div>
  )
}

export default FindUs

import React from 'react'
import logo from "../assets/logo.png"
import moment from 'moment'

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-3 my-3'>
      <img src={logo} alt="Logo" />
      <h3 className='text-gray-500 text-base'>Journalism Without Fear or Favour</h3>
      <p className="my-3 text-xl font-semibold text-center">{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
    </div>
  )
}

export default Header

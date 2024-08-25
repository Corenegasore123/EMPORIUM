import React from 'react'
import ShoppingIcon from '../../assets/shopping-bag.png'
import { Link } from 'react-router-dom'

const Completed = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[72vh] gap-5'>
        <p className='text-green-600 text-4xl'>Payment Completed</p>
        <div className='py-7 px-14 border border-green-600 flex flex-col gap-3'>
            <p className='text-center'>Your order will be delivered soon</p>
            <p className='text-center'>Thanks for shopping with us</p>
        </div>
        <div className='flex flex-row items-center justify-center gap-3'>
            <img height="60" width="60" src={ShoppingIcon} alt="" />
            <h1 className="text-center text-amber-400 text-3xl font-semibold"><span className="text-green-800">E</span>MPORIU<span className="text-green-800">M</span></h1>
        </div>
        <Link to="/">
          <button className='dark:bg-gray-900 text-white py-3 px-7 rounded-full'>Back To Home</button>
        </Link>
    </div>
  )
}

export default Completed
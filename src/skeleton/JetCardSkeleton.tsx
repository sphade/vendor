import React from 'react'

const JetCardSkeleton = () => {
  return (
    <div className="w-64 h-[376px] rounded-md shadow p-2">
    <div className=" rounded-t-md h-[100px] bg-gray-300 animate-pulse overflow-hidden">
      
    </div>
    <div className="divide-y ">
      <div className="flex items-center py-4 justify-between">
        <h3 className="text-tertiary bg-gray-300 animate-pulse font-semibold capitalize text-base h-5 w-24">
       
        </h3>
        <p className='bg-gray-300 animate-pulse h-5 w-5'></p>
      </div>
      <div className="py-4 space-y-2">
        <div className="flex justify-between text-xs text-gray-400">
          <p className='bg-gray-300 animate-pulse w-10 h-4'></p> <p className='w-10 h-4 bg-gray-300 animate-pulse'> </p>
        </div>
        <div className="flex justify-between text-tertiary capitalize font-semibold text-sm">
          <p className='bg-gray-300 w-10 h-4 animate-pulse'></p> <p className='bg-gray-300 w-10 h-4 animate-pulse'> </p>
        </div>
      </div>
      <div className="py-4 center-element flex-col space-y-1">
        <p className="text-gray-400 text-xs capitalize bg-gray-300 animate-pulse h-4 w-20"></p>
        <p className="text-tertiary font-semibold bg-gray-300 animate-pulse w-4 h-4"></p>
      </div>
      <div className="center-element py-2">
        <button className="uppercase py-2 px-4 bg-orange-100 animate-pulse rounded-md w-[70px] h-[30px] font-bold text-sm">
          
        </button>
      </div>
    </div>
  </div>
  )
}

export default JetCardSkeleton
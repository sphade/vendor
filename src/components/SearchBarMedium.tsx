import React from 'react'
import SearchIcon from "../assets/images/icons/Search.png"
const SearchBarMedium = () => {
  return (
    <div className='rounded-md border border-gray-400 px-2 w-[450px] flex  py-1'>
      <img src={SearchIcon} alt=""className='mr-2' />
      <input type="text" className='outline-none w-full bg-transparent' placeholder='Search' />
    </div>
  )
}

export default SearchBarMedium
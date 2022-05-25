import React from 'react'
import SearchIcon from "../assets/images/icons/Search.png"
const SearchBar = () => {
  return (
    <div className='rounded-md border border-gray-400 flex w-[250px]  py-1'>
      <img src={SearchIcon} alt=""className='mx-2' />
      <input type="text" className='outline-none bg-transparent' placeholder='Search' />
    </div>
  )
}

export default SearchBar
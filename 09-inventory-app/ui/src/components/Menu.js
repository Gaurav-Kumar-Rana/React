import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='container flex justify-between w-full border-b border-white'>
      <img src="https://reactrouter.com/_brand/React%20Router%20Brand%20Assets/React%20Router%20Lockup/Light.svg" alt="Inventory app" className='w-40'/>
      <ul className='flex'>
        <li className='p-2 m-2 bg-black hover:bg-green-800 hover:text-black cursor-pointer uppercase'>
            <Link to="/inventory">View</Link>
        </li>
        <li className='p-2 m-2 bg-black hover:bg-green-800 hover:text-black cursor-pointer uppercase'>
            <Link to="/add">Add</Link>
        </li>
        <li className='p-2 m-2 bg-black hover:bg-green-800 hover:text-black cursor-pointer uppercase'>
            <Link to="/edite/2">Edite</Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu

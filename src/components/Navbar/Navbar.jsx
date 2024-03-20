import React,{useState} from 'react'
import Logo from "../../assets/food-logo.png";
import { FaCartShopping } from "react-icons/fa6"
import DarkMode from './DarkMode';
import {useNavigate} from 'react-router-dom'


const Navbar = () => {

  const navigate = useNavigate()
  
  const routeChange = () =>{ 
    let path = `/Order`; 
    navigate(path);
  }
 
  const [open,setOpen] =useState(false)
  return (
    <>
    <div className='shadow-md  text-black bg-white 
     dark:bg-gray-900 dark:text-white
     
      duration-200'>
        <div  className='container py-3 sm:py-0 '>
        <div className="flex justify-between items-center 
        ">
            <div>
               <a href="#" className='flex items-center gap-2 text-2xl sm:text-3xl font-bold'>
                <img src={Logo} alt="Foodie Zone" className='w-10'/>
                Foodie 
               </a>
            </div>
          
      
           
            <div className='flex items-center gap-4'>
              <div>
              <DarkMode/>
              </div>
              <ul className='hidden sm:flex gap-4'>
                <li>
                  <a href="#" className='inline-block py-4 px-4 hover:text-primary'>Home</a>
                </li>
                <li>
                  <a href="#" className='inline-block py-4 px-4 hover:text-primary'>About</a>
                </li>
                <li>
                  <a href="#" className='inline-block py-4 px-4 hover:text-primary'>Contact</a>
                </li>
              </ul>
              <button onClick={routeChange} className='bg-gradient-to-r from-primary to-secondary
              text-white px-4 py-1 rounded-full hover:scale-105 duration-300 flex items-center
               gap-3'>
                Order
                <FaCartShopping className="text-xl text-white drop-shadow-sm
                cursor-pointer" />
              </button>
                    
          <div className="relative ml-3">
            <div>
              <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true" onClick={()=>setOpen(!open)} >
              
              
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">Open user menu</span>
               
            <img className="rounded w-8 h-8" src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="" />
              </button>
             
            </div>
           {
            open && 
            <div  className=" absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:text-black py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="1">
          
            <a  href="#" className=" block  hover:bg-blue-100  px-4 py-2 text-sm font-semibold"   role="menuitem" tabIndex="2" id= "user-menu-item-0"> Profile</a>
              
              <a href="#" className="block hover:bg-blue-100  px-4 py-2 text-sm font-semibold " role="menuitem" tabIndex="3" id= "user-menu-item-0" >Settings</a>
              <a href="#" className="block hover:bg-blue-100  px-4 py-2 text-sm font-semibold " role="menuitem" tabIndex="4" id= "user-menu-item-0">Sign out</a>
   
            </div>
           }
            
          
          </div>

            </div>
        </div>

            
        </div>
    </div>
    </>
  )
}

export default Navbar

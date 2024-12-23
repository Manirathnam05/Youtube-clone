import React from 'react';
import "./Navbar.css";
import menu from "../../assets/menu.png";
import Logo from "../../assets/logo.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification from "../../assets/notification.png";
import profile_icon from "../../assets/jack.png";
import { Link } from 'react-router-dom';
import Logos from "../../../public/Logos.png";

const Navbar = ({setSlide}) => {
  return (
   <nav className='flex-div navbars'>
    <div className='left-nav flex-div'>
        <img src={menu} alt='menu-left' onClick={()=>setSlide(prev => prev===false?true:false)}   className='menu-left'/>
        <Link to="/"><img src={Logos} alt='logo' className='logo-left'/></Link>

    </div>

    <div className='middle-nav flex-div'>
        <div className='center flex-div'>
            <input type='text' placeholder='search'/>
            <img src={search_icon}/>
           
        </div>
    </div>

    <div className='right-nav flex-div'>
        <img src={upload_icon} />
        <img src={more_icon}/>
        <img src={notification}/>
        <img src={profile_icon} alt="" className='profile-icon' />
    </div>

   </nav>
  )
}

export default Navbar;

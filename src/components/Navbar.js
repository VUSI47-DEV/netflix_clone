import React, {useState,useEffect} from 'react';
import logo from './images/logo.png';
import avatar from './images/netflix-avatar.png';
import './Navbar.css';

function Navbar() {

  const [show , handleShow] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY > 100){
        handleShow(true);
      }else{
        handleShow(false)
      }
    });
    return()=>{
      window.removeEventListener('scroll')
    }
  },[])

  return (
    <div className={`nav ${show && 'nav-black'}`}>
      <div className="Container">
        <img className='nav-logo' src={logo}/>
        <img className='avatar' src={avatar}/>
      </div>

    </div>
  )
}

export default Navbar
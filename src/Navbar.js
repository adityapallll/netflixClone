import React, { useEffect, useState } from 'react'
import './Navbar.css'

const Navbar = () => {

    const [show,handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                console.log("100")
                handleShow(true);
            }else handleShow(false);
        });
        return ()=>{
                window.removeEventListener("scroll",()=>{
                    handleShow(false)
                });
            }
    },[]);

  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img className="nav_logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix logo"/>
        <img className="nav_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix Avatar"/>
    </div>
  )
}

export default Navbar
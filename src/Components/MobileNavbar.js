import React from 'react';
import { Link } from 'react-router-dom';

function changeIcon(x){
    // x.classList.toggle("fa-angle-down");
    document.querySelector("#menu-icon").classList.toggle("fa-angle-down");
   
}

const MobileNavbar =(props)=>{
    return(
        <div className="mobileNavContainer">
            <div>
            <Link to="/" onClick={()=>{props.navToggle();changeIcon(this);}}><i id="menu-icon" className="fa fa-bars"></i></Link>
            {/* <i className="fa fa-angle-down"></i> */}
            </div>
            
          <img src="/Assets/logo.png" alt="" />
        
            <div>
            <Link to="/" className="notificationIcon">
                <i class="fa fa-bell" ></i>
                <span class="badge">3</span>
                </Link> 
            </div>
        </div>
    )
}
export default MobileNavbar;
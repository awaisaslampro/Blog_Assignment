import React from 'react';
import { Link } from 'react-router-dom';

const Navbar=()=>{
    return(
        <div className="nav-bar-container">
           <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/">Articles</Link></li>
               <li><Link to="/">Audio</Link></li>
           </ul>
        </div>
    )
}
export default Navbar;
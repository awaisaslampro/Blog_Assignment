import React from 'react';
// import {Grid, Cell} from 'react-mdl';
// import './Home.css';
import { Link } from 'react-router-dom';
// import NoticofRight from './NoticeofRight';
// import StickyFooter from 'react-sticky-footer';
  function Footer(){
      return (


// <StickyFooter
//     bottomThreshold={50}
//     normalStyles={{

//     }}
//     stickyStyles={{
  
  
//     }}
// >
//     	<div className="footer">
		
// 		<div className="footerPara">
// 		<p>© 2019 Copyright Amril Army.</p>
// 		</div>

// 		<div className="footerLinks">
// 		<p><Link to="/" className="footerLink">Privacy</Link> | <Link className="footerLink" to="/">Terms</Link> | <Link className="footerLink"to="/LandingPage">Contact us</Link></p>
// 		</div>
// 		</div>
// </StickyFooter>
<>
		<footer className="footerMainContainer ">
	


        <div className="seperateFooter">

		<div className="">
		<p><Link to="/Home" className="footerLink">Home</Link></p>
		</div>
        
		<div className="">
		<p><Link to="/NoticeofRight" className="footerLink">Privacy Policy</Link></p>
		</div>

        <div className="">
		<p><Link to="/TermsAndConditions" className="footerLink">Terms & Conditions</Link></p>
		</div>

        <div className="">
		<p><Link to="/" className="footerLink">Do Not Sell My Personal Information</Link></p>
		</div>

		
	
		</div>
		</footer> 
		{/* <SidenavTesting/> */}
   
</>
      );
  }
export default Footer;
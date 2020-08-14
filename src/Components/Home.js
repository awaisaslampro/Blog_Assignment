import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Search from './Search';
import Gallery from './Gallery';
import Articles from './Articles';
import MobileNavbar from './MobileNavbar';
import '../Layout/Style/Style.css';
import galleryImg1 from '../Layout/img/1.png';
import galleryImg2 from '../Layout/img/2.png';
import galleryImg3 from '../Layout/img/3.png';
import galleryImg4 from '../Layout/img/4.png';
import galleryImg5 from '../Layout/img/5.png';

import postGallery1 from '../Layout/img/p1.png';
import postGallery2 from '../Layout/img/p2.png';
import postGallery3 from '../Layout/img/p3.png';
import postGallery4 from '../Layout/img/p4.png';
import postGallery5 from '../Layout/img/p5.png';
class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            galleryData: [
                {id: 1, galleryImg: galleryImg1, postImg: postGallery1, title: "pic me up", detail: "Got weather blues?"},
                {id: 2, galleryImg: galleryImg2, postImg: postGallery2, title: "FEELING FRAGILE", detail: "Need a extra love?"},
                {id: 3, galleryImg: galleryImg3, postImg: postGallery3, title: "DEAR DIARY", detail: "A modern twist."},
                {id: 4, galleryImg: galleryImg4, postImg: postGallery4, title: "SEMINAR", detail: "What is it & why care"},
                {id: 5, galleryImg: galleryImg5, postImg: postGallery5, title: "SEMINAR", detail: "What is it & why care"},


            ],
            // title: "pic me up",
            showNav: true,
            showArticle:false
            
        }
    }
    toggleShow=(x)=>{
        // alert("mobile");
        const showView = this.state.showNav;
        const changeView = this.state.showArticle;
        this.setState({
            showNav: !showView,
            showArticle: !changeView
        })

        // x.classList.toggle("fa-thumbs-down");
         
    }
    render() {
        return (
            <>
                <div className="container topMainContainer">
                <div className="mainLgLogo">
                                 <div>
                                 <img src="/Assets/logo.png" alt="" />
                                 </div>
                                 </div>
                             <div className="row">   
                             <div className="d-xl-none d-lg-none d-md-none d-sm-block col-sm-12 col-12">                               
                                {/* <MobileNavbar/> */}
                                <MobileNavbar navToggle = {this.toggleShow}/>
                             </div>
                             </div>

          {this.state.showArticle && <Articles/>}

    {this.state.showNav && ( <div className="row nav-container">
                        {/* Navbar for Lg*/}
                        <div className="col-md-9">
                            <div>
                                <Navbar />
                            </div>
                        </div>

                        {/* Searchbar */}
                        <div className="col-md-3">
                            <div>
                                <Search />
                            </div>
                        </div>
                      
                    </div>
                  )}

                    <div className="main-section">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-3 d-md-block d-sm-none d-none">
                            <img className="mainSectionImg" src="/Assets/11.png" alt="" />

                        </div>


                        <div className="col-xl-9 col-lg-9 col-md-9 ">
                       <Link to="/"><div class="more-articles"><span>+</span></div></Link>
                            <h1>Check<br /> recommended articles</h1>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <Link to="/"><button className="readMore">More</button></Link>
                            
                            <div className="row seperated-articles">
                            <div className="col-xl-2 col-lg-2 col-md-2 d-md-block d-sm-none d-none">
                            <img src="/Assets/a.png" alt="" />
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-2 d-md-block d-sm-none d-none">
                            <img src="/Assets/b.png" alt="" />
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-2 d-md-block d-sm-none d-none">
                            <img src="/Assets/c.png" alt="" />
                            </div>
                            </div>         

                        </div>

                    </div>
                    </div>

                    {/* Gallery */}
                    <div className="row">
                        <div className="col-md-12">
                           {/* <Gallery/> */}
                           {this.state.galleryData.map((gallery, index)=>{
                               return <Gallery 
                                title = {gallery.title}
                                detail = {gallery.detail}
                                galleryPNG = {gallery.galleryImg}
                                postPNG = {gallery.postImg}
                               ></Gallery>
                           })}
                            
                            
                        </div>
                    </div>

                </div>
            </>
        );
    }
}

export default Home;
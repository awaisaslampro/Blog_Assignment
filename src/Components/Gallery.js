import React from 'react';

const Gallery=(props)=>{
    return(
        
        <div className="galleryContainer">
          
            <div className="galleryMain ">   
            <img className="mainGalleryView" src={props.galleryPNG} alt="" />
            {/* <div className="sidePostImg"> */}
                <div className="sidePost1">
                <img className="" src={props.postPNG} alt="" />
                </div>

                <div className="sidePost2">
                    <span className="sidePost2Sign">+</span>
                </div>
       

            <div className="galleryPara">                    
             <h3>{props.title}</h3>
            <p>{props.detail}</p>
            </div>
         
          
           
            
            {/* <div className="col-md-3 col-sm-6 col-12">   
            <img className="mainGalleryView" src="/Assets/6.png" alt="" />
             <img className="postImg" src="/Assets/p1.png" alt=""/>
            <span className="galleryPara">
            <h3>PICK ME UP</h3>
            <p>Got the weather blues?</p>
            </span>
            </div>

            <div className="col-md-3 col-sm-6 col-12">   
            <img className="mainGalleryView" src="/Assets/6.png" alt="" />
            <img className="postImg" src="/Assets/p1.png" alt=""/>
            <span className="galleryPara">
            <h3>PICK ME UP</h3>
            <p>Got the weather blues?</p>
            </span>
            </div>

            <div className="col-md-3 col-sm-6 col-12">   
            <img className="mainGalleryView" src="/Assets/6.png" alt="" />
            <img className="postImg" src="/Assets/p1.png" alt=""/>
            <span className="galleryPara">
            <h3>PICK ME UP</h3>           
            <p>Got the weather blues?</p>
            </span>
            </div>

            <div className="col-md-3 col-sm-6 col-12">   
            <img className="mainGalleryView" src="/Assets/6.png" alt="" />
            <img className="postImg" src="/Assets/p1.png" alt=""/>
            <span className="galleryPara">
            <h3>PICK ME UP</h3>
            <p>Got the weather blues?</p>
            </span>
            </div> */}

         

        </div>
        </div>
    )
}
export default Gallery;
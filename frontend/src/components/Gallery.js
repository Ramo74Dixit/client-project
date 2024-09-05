import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/gallery/gal-1.png";
import img2 from "../assets/gallery/gal-2.png";
import img3 from "../assets/gallery/gal-3.png";
import img4 from "../assets/gallery/gal-4.png";
import img5 from "../assets/gallery/gal-5.png";
import img6 from "../assets/gallery/gal-6.png";
import img7 from "../assets/gallery/gal-7.png";
import img8 from "../assets/gallery/gal-8.png";
import img9 from "../assets/gallery/gal-9.png";
import img10 from "../assets/gallery/gal-10.png";
import img11 from "../assets/gallery/gal-11.png";
import img12 from "../assets/gallery/gal-12.png";
import img13 from "../assets/gallery/gal-13.png";
import img14 from "../assets/gallery/gal-14.png";
import img15 from "../assets/gallery/gal-15.png";
import img16 from "../assets/gallery/gal-16.png";
import img17 from "../assets/gallery/gal-17.png";
import img18 from "../assets/gallery/gal-18.png";
import "../App.css"; // Import the CSS file
import Footer from './Footer'


const Gallery = () => {
  return (
    <div>
    <div className="gallery-container min-h-screen flex flex-col md:flex-row ">
       <div className="md:w-full pt-4 pb-0 pl-8 pr-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-10">
  
        <div className="col-span-1 w-full h-full">
          <img
            src={img14}
            alt="Gallery Image 14"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-2 row-span-2 md:h-[570px] w-full h-auto">
          <img
            src={img16}
            alt="Gallery Image 16"
            className="w-full h-full object-cover"
          />
          
        </div>
       
        <div className="col-span-2 w-full h-auto">
          <img
            src={img2}
            alt="Gallery Image 2"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="row-span-2 w-full h-auto">
          <img
            src={img3}
            alt="Gallery Image 3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-auto">
          <img
            src={img4}
            alt="Gallery Image 4"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-auto">
          <img
            src={img5}
            alt="Gallery Image 5"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-auto">
          <img
            src={img6}
            alt="Gallery Image 6"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-auto">
          <img
            src={img7}
            alt="Gallery Image 7"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="row-span-3 w-full h-auto">
          <img
            src={img8}
            alt="Gallery Image 8"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="row-span-2 w-full h-auto">
          <img
            src={img9}
            alt="Gallery Image 9"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="row-span-3 w-full h-auto">
          <img
            src={img10}
            alt="Gallery Image 10"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:[h-64] w-full h-auto">
          <img
            src={img11}
            alt="Gallery Image 11"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-2 w-full h-auto">
          <img
            src={img12}
            alt="Gallery Image 12"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full h-auto">
          <img
            src={img13}
            alt="Gallery Image 13"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-auto">
          <img
            src={img15}
            alt="Gallery Image 15"
            className="w-full h-full object-cover"
          />
        </div>
        
        
        <div className="w-full h-auto">
          <img
            src={img17}
            alt="Gallery Image 17"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-auto">
          <img
            src={img1}
            alt="Gallery Image 1"
            className="w-full h-full object-cover "
          />
        </div>
        <div className="col-span-3 w-full h-[400px]">
          <img
            src={img18}
            alt="Gallery Image 18"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="md:w-[10%] md:ml-auto md:bg-[#F7D9C4]"></div>


      {/* Gallery Grid */}
     
    </div>
    </div>
  );
};

export default Gallery;

import React, { useState } from 'react';
import './About.scss'
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { imagesArray } from '../data'

export default function Carousel() {

    //default states for the images
    const [currImg, setCurrImg] = useState(0);
    const [secondImg, setSecondImg] = useState(1);
    const [thirdImg, setThirdImg] = useState(2);
    return (
            <div className='imageoutercontainer'>
            <div className="image">
          <img 
          width={500} height={900}
          src={imagesArray[currImg].img} 
          alt={imagesArray[currImg].alt} 
          loading="lazy" 
          className={imagesArray[currImg].className} 
          />
          
          <div className="image__overlay"> 
              
             <p>{imagesArray[currImg].message}</p>

             </div>
            </div>
            <div className="image">
          <img 
          src={imagesArray[secondImg].img} 
          alt={imagesArray[secondImg].alt} 
          loading="lazy" 
          className={imagesArray[secondImg].className} 
          />
          
          <div className="image__overlay"> 
              
             <p>{imagesArray[secondImg].message}</p>

             </div>
            </div>
            <div className="image">
          <img 
          src={imagesArray[thirdImg].img} 
          alt={imagesArray[thirdImg].alt} 
          loading="lazy" 
          className={imagesArray[thirdImg].className} 
          />
          
          <div className="image__overlay"> 
              
             <p>{imagesArray[thirdImg].message}</p>

             </div>
            </div>

        <div className='left' onClick={() => {
        if (currImg > 0) {
            setCurrImg(currImg - 1);
        } else { 
             setCurrImg(imagesArray.length-1); 
             }
        if (secondImg > 0) {
            setSecondImg(secondImg -1);
        } else {
            setSecondImg(imagesArray.length-1);
        }
        if (thirdImg > 0) {
            setThirdImg(thirdImg -1);
        } else {
            setThirdImg(imagesArray.length-1);
        }
        }}>
            <FaArrowLeft style={{fontSize: 50 }}/>
        </div>
        <div className='right' onClick={() => {
            if (currImg < imagesArray.length - 1)
            {
                setCurrImg(currImg + 1);
            }  else { 
                setCurrImg(0);
            }
            if (secondImg < imagesArray.length -1) {
                setSecondImg(secondImg+1);
            } else {
                setSecondImg(0);
            }
            if (thirdImg < imagesArray.length -1) {
                setThirdImg(thirdImg+1);
            } else {
                setThirdImg(0);
            }
        }}>
            <FaArrowRight style={{fontSize: 50 }}/>
        </div>

     </div>
    )
}
import React, { useState } from 'react';
import './About.scss'
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { imagesArray } from '../data'

export default function Carousel() {

    const [currImg, setCurrImg] = useState(0);
    return (
            <div className='imageoutercontainer'>
            <div className="image">
          <img src={imagesArray[currImg].img} alt={imagesArray[currImg].alt} loading="lazy" className={imagesArray[currImg].className} />
          
          <div className="image__overlay"> 
              
             <p>{imagesArray[currImg].message}</p>

             </div>
            </div>

        <div className='left' onClick={() => {
        if (currImg > 0) {
            setCurrImg(currImg - 1);
        } else { 
             setCurrImg(imagesArray.length-1); 
             }
        }}>
            <FaArrowLeft style={{fontSize: 50 }}/>
        </div>
        <div className='right' onClick={() => {
            if (currImg < imagesArray.length - 1)
            {
                setCurrImg(currImg + 1)
            } else {
                setCurrImg(0);
            }
        }}>
            <FaArrowRight style={{fontSize: 50 }}/>
        </div>

     </div>
    )
}
import React, { useState } from 'react';
import { imagesArray } from '../../data'

const Carouselleftright = () => {

    const [currImg, setCurrImg] = useState(0);
    const [secondImg, setSecondImg] = useState(1);
    const [thirdImg, setThirdImg] = useState(2);
    const [fourthImg, setFourthImg] = useState(3);
    const [fifthImg, setFifthImg] = useState(4);
 
    //default states for the images
  
    //will be used if I decide to add autolooping if not changed over 20 ticks.
    const [isClickedRight, setIsClickedRight] = useState();
    const [isClickedLeft, setIsClickedLeft] = useState();
    
    //event handler functions
    const handleClickRight = (e) => {
        e.preventDefault();
        setIsClickedRight(!isClickedRight);
    }
    
    const handleClickLeft = (e) => {
        e.preventDefault();
        setIsClickedLeft(!isClickedLeft);
        if (currImg.state === 0) {
            setCurrImg(currImg.state + 4);
        } else {
            setCurrImg(currImg.state - 1);
        }
        if (secondImg.state === 0) {
            setSecondImg(secondImg.state + 4);
        } else {
            setSecondImg(secondImg.state - 1);
        }
        if (thirdImg.state -1  === 0) { 
            setThirdImg(thirdImg.state + 4);
        } else {
            setThirdImg(thirdImg.state - 1);
        }
        if (fourthImg.state === 0) {
            setFourthImg(fourthImg.state + 4);
        } else {
            setFourthImg(fourthImg.state - 1);
        }
        if ( fifthImg.state === 0) {
            setFifthImg(fifthImg.state + 4);
        } else {
            setFifthImg(fifthImg.state - 1);
        }
    }



    return (

    <div className='imageoutercontainer' >
        
<div className="image" style={{
        'display': 'block',
        'opacity':'.3',
        'cursor': 'pointer',
    }} onClick={handleClickLeft}>
          <img 
          src={imagesArray[fourthImg].img} 
          alt={imagesArray[fourthImg].alt} 
          className={imagesArray[fourthImg].className}
          id={'s4'}
          />
          
          <div className="image__overlay"> 
             <p>{imagesArray[fourthImg].message}</p>

             </div>

    </div>
    
    <div className="image" style={{
        'display': 'block',
    }}>
          <img 
          src={imagesArray[currImg].img} 
          alt={imagesArray[currImg].alt} 
          className={imagesArray[currImg].className}
          id={'s1'}
          />
          <div className="image__overlay"> 
              
             <p>{imagesArray[currImg].message}</p>

             </div>

    </div>

    <div className="image"  style={{
        'display': 'block',
    }}>
          <img 
          src={imagesArray[secondImg].img} 
          alt={imagesArray[secondImg].alt} 
          className={imagesArray[secondImg].className} 
          id={'s2'}
          />
          <div className="image__overlay">      
             <p>{imagesArray[secondImg].message}</p>
          </div>
    

    </div>

    <div className="image"  style={{
        'display': 'block',
        
    }}>
          <img 
          src={imagesArray[thirdImg].img} 
          alt={imagesArray[thirdImg].alt} 
          className={imagesArray[thirdImg].className}
          id={'s3'}
          />
          <div className="image__overlay"> 
             <p>{imagesArray[thirdImg].message}</p>
             
        </div>
    </div>


    <div className="image" style={{
        'display': 'block',
        'opacity': '.3',
        'cursor': 'pointer',
    }} onClick={handleClickRight}>
          <img 
          src={imagesArray[fifthImg].img} 
          alt={imagesArray[fifthImg].alt} 
          className={imagesArray[fifthImg].className}
          id={'s5'}
          />
          <div className="image__overlay"> 
              
             <p>{imagesArray[fifthImg].message}</p>

          </div>
    </div>

        
   
     </div>

    );
}
 
 export default Carouselleftright;
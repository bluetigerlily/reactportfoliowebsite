import React, { useState } from 'react';
import { imagesArray } from '../../data'

const Carouselleftright = () => {

    const [currImg] = useState(0);
    const [secondImg] = useState(1);
    const [thirdImg] = useState(2);
    const [fourthImg] = useState(3);
    const [fifthImg] = useState(4);
 
    //default states for the image
  

    return (

    <div className='imageoutercontainer' >
        
<div className="image" style={{
        'display': 'block',
    }}>
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
    }}>
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
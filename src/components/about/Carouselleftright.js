/* eslint-disable no-eval */
import React from 'react';
import { imagesArray } from '../../data';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader



  
const Carouselleftright = () => {
 
    
  

    return (
     
         <div className='imageoutercontainer' >
            <Carousel>
             {imagesArray.map((item) => (
                <div className='image' id={item.id} style={{
                    'display': 'block',
                    }}
                    >
                    <img
                        src={item.img}
                        alt={item.alt}
                        width={`300px`}
                        className={item.className}
                    />
                    <div className="image__overlay"
                    style={{
                        'display': 'flex',
                        'flexFlow': 'wrap',
                    }}>
                        <p style={{
                        'display': 'flex',
                        'flexFlow': 'wrap',
                    }}>{item.message}</p>
                    </div>
                </div>   
             ))}   
             </Carousel> 
 
             </div>
 

    );
}
 
 export default Carouselleftright;
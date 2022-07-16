import React, { useState, useEffect } from 'react';
import { imagesArray } from '../../data';
import Carousel from "./Carousel.js";



  
const Carouselleftright = () => {
 
    const [width, setWidth]   = useState(window.outerWidth);
    const updateDimensions = () => {
        setWidth(window.outerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return (
        (width>800) ? 
        (<div className='imageoutercontainer' style={{ maxWidth: 776, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
        <Carousel
            show={2}
            infiniteLoop={true}>
         {imagesArray.map((item) => (
            <div className='image' id={item.id} style={{
                'display': 'block',
                }}
                >
                <img
                    src={item.img}
                    alt={item.alt}
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
) : (<div className='imageoutercontainer' style={{ maxWidth: 388, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
<Carousel
    show={1}
    infiniteLoop={true}>
 {imagesArray.map((item) => (
    <div className='image' id={item.id} style={{
        'display': 'block',
        }}
        >
        <img
            src={item.img}
            alt={item.alt}
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
)
         

    );
}
 
 export default Carouselleftright;
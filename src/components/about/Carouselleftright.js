import React, { useState, useEffect } from 'react';
import { imagesArray } from '../../data';
import Carousel from "./Carousel.js";



  
const Carouselleftright = () => {
 
    const [width, setWidth]   = useState(window.innerWidth);
    const [ifMobile, setIfMobile] = useState(false);

    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }
    const updateIsMobile = (width) => {
        if (width <= 388) {
        setIfMobile(true)
        }
    }   
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);
    useEffect(() => {
        window.addEventListener("resize", updateIsMobile);
        return () => window.removeEventListener("resize", updateIsMobile); 

    }, []);

    return (
        (ifMobile === true) ? (<div className='imageoutercontainer' style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
        <Carousel
            show={1}
            infiniteLoop={true}>
         {imagesArray.map((item) => (
            <div className='image' id={item.id} style={{
                'display': 'block',
                'width': '250',
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
                    'width': '250',
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
        ) :
        (width<800) ?
        (<div className='imageoutercontainer' style={{ maxWidth: 388, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
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
) : 
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
) 
        
    );
}
 
 export default Carouselleftright;
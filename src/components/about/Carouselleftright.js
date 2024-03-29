import React, { useState, useEffect } from 'react';
import { imagesArray } from '../../data';
import Carousel from "./Carousel.js";



  
const Carouselleftright = () => {
 
    const [width, setWidth]   = useState(window.innerWidth);

    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }

    
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

if (width >= 1200) {
    return (
        <div className='imageoutercontainer' onLoad={updateDimensions} style={{ maxWidth: 1162, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
<Carousel
show={3}
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
}


else if ((width<1200) && (width>800)) {
    return (
        <div className='imageoutercontainer' style={{ maxWidth: 775, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
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
            }
            
            
            else  {
                return ( 
                   <div className='imageoutercontainer' style={{ maxWidth: 387.5, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
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
               }
}
 
 export default Carouselleftright;
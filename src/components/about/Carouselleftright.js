import React from 'react';
import { imagesArray } from '../../data'

class Carouselleftright extends React.Component {

 
    constructor(props) {
        super(props);
        this.state = {
            currImg: 0,
            secondImg: 1,
            thirdImg: 2,
            fourthImg: 3,
            fifthImg: 4,
        }
    }
    //default states for the images



render() {

    return (

<div className='imageoutercontainer' >
        
    
<div className="image" style={{
        'display': 'block',
    }}>
          <img 
          src={imagesArray[this.state.fourthImg].img} 
          alt={imagesArray[this.state.fourthImg].alt} 
          className={imagesArray[this.state.fourthImg].className}
          id={'s4'}
          loading={'lazy'}
          />
          <div className="image__overlay"> 
              
             <p>{imagesArray[this.state.fourthImg].message}</p>

             </div>

    </div>
    
    <div className="image" style={{
        'display': 'block',
    }}>
          <img 
          src={imagesArray[this.state.currImg].img} 
          alt={imagesArray[this.state.currImg].alt} 
          className={imagesArray[this.state.currImg].className}
          id={'s1'}
          loading={'lazy'}
          />
          <div className="image__overlay"> 
              
             <p>{imagesArray[this.state.currImg].message}</p>

             </div>

    </div>

    <div className="image"  style={{
        'display': 'block',
    }}>
          <img 
          src={imagesArray[this.state.secondImg].img} 
          alt={imagesArray[this.state.secondImg].alt} 
          className={imagesArray[this.state.secondImg].className} 
          id={'s2'}
          loading={'lazy'}
          />
          <div className="image__overlay">      
             <p>{imagesArray[this.state.secondImg].message}</p>
          </div>
    

    </div>

    <div className="image"  style={{
        'display': 'block',
        
    }}>
          <img 
          src={imagesArray[this.state.thirdImg].img} 
          alt={imagesArray[this.state.thirdImg].alt} 
          className={imagesArray[this.state.thirdImg].className}
          id={'s3'}
          loading={'lazy'}
          />
          <div className="image__overlay"> 
             <p>{imagesArray[this.state.thirdImg].message}</p>
             
        </div>
    </div>


    <div className="image" style={{
        'display': 'block',
    }}>
          <img 
          src={imagesArray[this.state.fifthImg].img} 
          alt={imagesArray[this.state.fifthImg].alt} 
          className={imagesArray[this.state.fifthImg].className}
          id={'s5'}
          />
          <div className="image__overlay"> 
              
             <p>{imagesArray[this.state.fifthImg].message}</p>

          </div>
    </div>

        
    

     </div>
    )
}
 }
 export default Carouselleftright;
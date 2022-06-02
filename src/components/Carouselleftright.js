import React from 'react';
import './About.scss'
import { imagesArray } from '../data'

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

     
    //timed scrolling through states for the carousel for the right input
    // getData() {
       

              
    //     if (this.state.currImg < imagesArray.length - 1)
    //     {
    //         this.setState({currImg: this.state.currImg + 1});
    //     }  else { 
    //         this.setState({currImg: 0});
    //     }
    //     if (this.state.secondImg < imagesArray.length -1) {
    //         this.setState({secondImg: this.state.secondImg+1});
    //     } else {
    //         this.setState({secondImg: 0});
    //     }
    //     if (this.state.thirdImg < imagesArray.length -1) {
    //         this.setState({thirdImg: this.state.thirdImg+1});
    //     } else {
    //         this.setState({thirdImg: 0});
    //     }
    //     if (this.state.fourthImg < imagesArray.length - 1) {
    //         this.setState({fourthImg: this.state.fourthImg});
    //     }
    //     else {
    //         this.setState({fourthImg: 0});
    //     }
    
    //     if (this.state.fifthImg < imagesArray.length - 1) {
    //     this.setState({fifthImg: this.state.fifthImg});
    //      }
    //     else {
    //     this.setState({fifthImg: 0});
    //     }
    // }
    

    // componentDidMount = () => {
    //     this.setDataRef = setInterval(() => this.getData(), 10000); 
    // };
    // componentWillUnmount() { 
    //     clearInterval(this.setDataRef) 
    //  }



render() {

    return (

<div className='imageoutercontainer' >
        
    
    <div className="image" style={{
        '--offset': (this.state.currImg),
        'display': 'block',
    }}>
          <img 
          src={imagesArray[this.state.currImg].img} 
          alt={imagesArray[this.state.currImg].alt} 
          className={imagesArray[this.state.currImg].className}
          id={'s1'}
          />
          <div className="image__overlay"> 
              
             <p>{imagesArray[this.state.currImg].message}</p>

             </div>

    </div>

    <div className="image"  style={{
        '--offset': (this.state.secondImg),
        'display': 'block',
    }}>
          <img 
          src={imagesArray[this.state.secondImg].img} 
          alt={imagesArray[this.state.secondImg].alt} 
          className={imagesArray[this.state.secondImg].className} 
          id={'s2'}
          />
          <div className="image__overlay">      
             <p>{imagesArray[this.state.secondImg].message}</p>
          </div>
    

    </div>

    <div className="image"  style={{
        '--offset': (this.state.thirdImg),
        'display': 'block',
    }}>
          <img 
          src={imagesArray[this.state.thirdImg].img} 
          alt={imagesArray[this.state.thirdImg].alt} 
          className={imagesArray[this.state.thirdImg].className}
          id={'s3'}
          />
          <div className="image__overlay"> 
             <p>{imagesArray[this.state.thirdImg].message}</p>
             
        </div>
    </div>

    <div className="image" style={{
        '--offset': (this.state.fourthImg),
        'display': 'block',
    }}>
          <img 
          src={imagesArray[this.state.fourthImg].img} 
          alt={imagesArray[this.state.fourthImg].alt} 
          className={imagesArray[this.state.fourthImg].className}
          id={'s4'}
          />
          <div className="image__overlay"> 
              
             <p>{imagesArray[this.state.fourthImg].message}</p>

             </div>

    </div>


    <div className="image" style={{
        '--offset': (this.state.fifthImg),
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
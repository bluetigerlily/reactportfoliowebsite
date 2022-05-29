import React from 'react';
import './About.scss'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp  } from 'react-icons/md'; 
import { imagesArray } from '../data'

 class Carouselupdown extends React.Component {

    constructor() {
        super();
        this.state = {
            currImg: 0,
            secondImg: 1,
            thirdImg: 2,
        }
    }
    //default states for the images



  

render() {
    return (
            <div className='imageoutercontainer'>
            <div className="image">
          <img 
          src={imagesArray[this.state.currImg].img} 
          alt={imagesArray[this.state.currImg].alt} 
          className={imagesArray[this.state.currImg].className} 
          />
          
          <div className="image__overlay"> 
              
             <p>{imagesArray[this.state.currImg].message}</p>

             </div>
            </div>
            <div className="image">
          <img 
          src={imagesArray[this.state.secondImg].img} 
          alt={imagesArray[this.state.secondImg].alt} 
          className={imagesArray[this.state.secondImg].className} 
          />
          
          <div className="image__overlay"> 
              
             <p>{imagesArray[this.state.secondImg].message}</p>

             </div>
            </div>
            <div className="image">
          <img 
          src={imagesArray[this.state.thirdImg].img} 
          alt={imagesArray[this.state.thirdImg].alt} 
          className={imagesArray[this.state.thirdImg].className} 
          />
          
          <div className="image__overlay"> 
              
             <p>{imagesArray[this.state.thirdImg].message}</p>

             </div>
            </div>

        <button className='up' onClick={() => {
        if (this.state.currImg > 0) {
            this.setState({currImg: this.state.currImg - 1});
        } else { 
             this.setState({currImg: imagesArray.length-1}); 
             }
        if (this.state.secondImg > 0) {
            this.setState({secondImg: this.state.secondImg -1});
        } else {
            this.setState({secondImg: imagesArray.length-1});
        }
        if (this.state.thirdImg > 0) {
            this.setState({thirdImg: this.state.thirdImg -1});
        } else {
            this.setState({thirdImg: imagesArray.length-1});
        }
        }}>
       
           
    <MdOutlineKeyboardArrowUp  style={{
                fontSize: 50,
                color: '#f9dec9',
            }}/>
            

        </button>
        
        <button className='down' onClick={() => {
            if (this.state.currImg < imagesArray.length - 1)
            {
                this.setState({currImg: this.state.currImg + 1});
            }  else { 
                this.setState({currImg: 0});
            }
            if (this.state.secondImg < imagesArray.length -1) {
                this.setState({secondImg: this.state.secondImg+1});
            } else {
                this.setState({secondImg: 0});
            }
            if (this.state.thirdImg < imagesArray.length -1) {
                this.setState({thirdImg: this.state.thirdImg+1});
            } else {
                this.setState({thirdImg: 0});
            }
        }}>
            <MdOutlineKeyboardArrowDown style={{
                fontSize: 50,
                color: '#f9dec9',
             }}/>
                
                
        </button>

     </div>
    )
}
 }
export default Carouselupdown;
import React from 'react';
import './About.scss'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'; 
import { imagesArray } from '../data'

class Carouselleftright extends React.Component {

 
    constructor(props) {
        super(props);
        this.state = {
            currImg: 0,
            secondImg: 1,
            thirdImg: 2,
        }
        this.clickThroughright = null;
        this.setClickThroughRight = element => {
            this.clickThroughright = element;
        };
    }
    //default states for the images
    onToggle = (event) => {
        this.props.parentCallback(event.target.isToggled);
        event.preventDefault();
    }


    //timed scrolling through states for the carousel for the right input
    onTimerright = () => {
    }
 
render() {

    return (
            <div className='imageoutercontainer' onClick={this.onToggle} onLoad={this.onToggle} onMouseLeave={this.onToggle}>
        
    
    <div className="image">
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

    <div className="image">
 
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

    <div className="image">
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

        <button type={'button'} className={'left'} onClick={() => {
        
        if (this.state.currImg > 0) {
            this.setState({currImg: this.state.currImg - 1});
        } else { 
             this.setState({currImg: imagesArray.length-1}); 
             }
        if (this.state.secondImg > 0) {
            this.setState({secondImg: this.state.secondImg -1});
        } else {
            this.setState({secondImg: (imagesArray.length-1)});
        }
        if (this.state.thirdImg > 0) {
            this.setState({thirdImg: this.state.thirdImg -1});
        } else {
            this.setState({thirdImg: (imagesArray.length-1)});
        } 
        }}
        >   
    <MdOutlineKeyboardArrowLeft  style={{
                fontSize: 50,
                color: '#f9dec9',
            }}/>
            

        </button>
        
        <button ref={this.onTimerright} className={'right'} onClick={() => {

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
        }}
       >
            <MdOutlineKeyboardArrowRight style={{
                fontSize: 50,
                color: '#f9dec9',
             }}/>
                
                
        </button>

     </div>
    )
}
 }
 export default Carouselleftright;
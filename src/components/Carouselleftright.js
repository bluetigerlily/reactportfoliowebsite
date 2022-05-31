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
        }
    }
    //default states for the images

     
    //timed scrolling through states for the carousel for the right input
    getData() {
       

              
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
      
    }

    componentDidMount = () => {
        this.setDataRef = setInterval(() => this.getData(), 5000); 
    };
    componentWillUnmount() { 
        clearInterval(this.setDataRef) 
     }



render() {

    return (
            <div className='imageoutercontainer' >
        
    
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

        <div className={'left'} onClick={() => {
        
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

            

        </div>
        
        <div className={'right'} onClick={() => {

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
        </div>

     </div>
    )
}
 }
 export default Carouselleftright;
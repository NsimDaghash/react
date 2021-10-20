import React from 'react';
import "./style.css";

class Spinner extends React.Component {   
    constructor(props){
        super(props);
        this.state = {
          flag:true 
        };
      }

componentDidMount(){
    setTimeout(() =>{
        this.setState({
            flag:!this.state.flag,
        })
    },5000);

}

    render(){
        if(this.state.flag){
            return (
                <div className="middle">
                    <div className="bar bar1"></div>
                    <div className="bar bar2"></div>
                    <div className="bar bar3"></div>
                    <div className="bar bar4"></div>
                    <div className="bar bar5"></div>
                    <div className="bar bar6"></div>
                    <div className="bar bar7"></div>
                    <div className="bar bar8"></div>
                </div>
                
            )            
        }
        else{
            return <div  style={{display:this.state.flag ? 'block' :'none'}} className='data'>Welcom</div>
        }
     }

}
  export default Spinner;
//import { blue } from 'chalk';
import React from 'react';
import "./style.css";

const colors=['red', 'cyan','green','yellow','gray'];

class Changcolor extends React.Component {   
    constructor(props) {
    super(props);
    this.state = {
      index:0    
    };
  }

  componentDidMount(){
        console.log(this.state.backgroundColor)
          this.setState({show:this.state.backgroundColor})
  }

componentDidUpdate(){
    let div = document.querySelector('.box')
    if(this.state.index <5){
    setTimeout(()=>{
        this.setState({backgroundColor : colors[this.state.index]})
        this.state.index =this.state.index+1
        div.style.backgroundColor=this.state.backgroundColor
    },500)
    }
    if(this.state.index == 5){
        div.style.borderRadius = '50%'
    }
}
  render() {
    return (
      <div className="wrapper">        
        <div className="box"></div>
      </div>
    );
  }
}

export default Changcolor;
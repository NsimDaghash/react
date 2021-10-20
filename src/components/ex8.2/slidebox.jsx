import React from 'react';
import "./style.css";

class Slidebox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,      
    };
  }

  componentDidMount(){
      setTimeout(()=>{
          this.setState({show:!this.state.show})
      },1000)
  }

componentDidUpdate(){
    let div = document.querySelector('.wrapper')
    div.animate(
        [
            {transform:'translateX(-200px)'},
            {transform:'translateX(-100px)'},
            {transform:'translateX(0px)'},
            {transform:'translateX(120px)'}
        ],{ 
            duration : 4000, 
            iterations:1
        }
    )

}
  render() {
    return (
      <div className="wrapper">        
        <div className="box box1"></div>
        <div className="box box2"></div>
        <div className="box box3"></div>
      </div>
    );
  }
 
}

export default Slidebox;
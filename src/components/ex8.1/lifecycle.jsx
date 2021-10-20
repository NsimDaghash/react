import React from 'react';
//import "./style.css";

class Lifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        favoriteColor : 'red'
      };
  }

  componentDidMount(){
    setTimeout(() => { 
      this.setState({
        favoriteColor : 'blue'
      })
    },1000);
  }
  
  componentDidUpdate(){

      document.querySelector('#favcolor').innerHTML = `<h1> The updatet favorite color is :${this.state.favoriteColor}</h1>`
  };

  render() {
    return (
      <div> 
        <h1>My favorite color is :{this.state.favoriteColor}</h1>      
        <div id="favcolor"></div>
      </div>
    );
  }
}

export default Lifecycle;
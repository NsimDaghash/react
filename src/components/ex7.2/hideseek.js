import React from 'react';
import "./style.css";

class Hideseek extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }

  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div>        
        <button onClick={this.ToggleClick}>{ this.state.show ? 'Hide rect' : 'Show rect' } </button>
        <div className="divbox" style ={{visibility:this.state.show ? 'visible' : 'hidden'}}></div>
      </div>
    );
  }
}

export default Hideseek;
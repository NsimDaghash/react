import React from 'react';
import "./style.css";

class Increment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  render() {
    return (
      <div className="buttonshow">
        <button onClick={this.IncrementItem}>Click to increment by 1</button>
         <h2 className="showText">{ this.state.clicks }</h2> 
      </div>
    );
  }
}

export default Increment;
import React from "react";
//import Button from "../components/Button/Button.component";
import Button from '../Button/Button.component'

const colors = ["blue", "red", "yellow", "black", "orange"];

class Appp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenColor: ""
    };
  }

  onColorClick = (color) => {
    this.setState({ chosenColor: color });
  };

  render() {
    return (
      <>
        <div>
          the color selcted is :
          <span style={{ color: this.state.chosenColor }}>
            {" "}
            {this.state.chosenColor}{" "}
          </span>
        </div>
        {colors.map((color, index) => {
          return (
            <Button method={this.onColorClick} color={color} key={index} />
          );
        })}
      </>
    );
  }
}

export default Appp;
import { render } from '@testing-library/react';
import React from 'react'

const colors = ['blue', 'red', 'yellow'];
class Appcolor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chosenColor: ""
        };
    };

onColorClick = (color) => {
    this.setState({ chosenColor: color });
};

render() {
    return (
        <div>
            The color is :
            <span style={{ color: this.state.chosenColor }}></span>
    </div>
    )
};
}
export default Appcolor;


// };
// const Appcolor = ({callBack}) => {
//  return(
//      <div>
//      <button onClick = {(e) => callBack(e)}>{colors[0]}</button>
//      <button onClick = {(e) => callBack(e)}>{colors[1]}</button>
//      <button onClick = {(e) => callBack(e)}>{colors[2]}</button>
//      </div>
//  )
// }

export default Appcolor


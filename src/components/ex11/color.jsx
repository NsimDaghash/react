import React from 'react'
import Appcolor from './colorcomponent/colorsun'


//ReactDOM.render(<Appcolor/> , document.querySelector('#root'))

class Ccolor extends React.Component{
    constructor(props) {
        super(props);
        // this.state = { 
        //     colors :['blue','red','yellow']
        // };
        }
        render(){
            return(
                <div>
                the current color is : < Appcolor/>
                </div>
            )
        }
}

export default Ccolor


import React from "react";

import "./style.css"

class CheckedBox extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = { checked: false, checked2: true,checked3: true,checked4: false};
      this.handleChange = this.handleChange.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleChange3 = this.handleChange3.bind(this);
      this.handleChange4 = this.handleChange4.bind(this);
    }  
  
    handleChange() {
      this.setState({
          checked: !this.state.checked      
      })
    }
  
    handleChange2() {
      this.setState({
          checked2: !this.state.checked2      
      })
    }
    handleChange3() {
        this.setState({
            checked3: !this.state.checked3    
        })
      }
      handleChange4() {
        this.setState({
            checked4: !this.state.checked4    
        })
      }
  
    render() {

      const togglecheck1 = this.state.checked ? 'hidden-check1' : '';
      const togglecheck2 = this.state.checked2 ? 'hidden-check2' : '';
      const togglecheck3 = this.state.checked2 ? 'hidden-check3' : '';
      const togglecheck4 = this.state.checked ? 'hidden-check4' : '';
  
      return <div className="wrapper">
          <div className="content">
          
          <input type="checkbox" id="chk1" className="chk11" checked={ this.state.checked } onChange={ this.handleChange } />
          <label>I read the term of the app</label><br/>
          
          <input type="checkbox" id="chk2" className="chk22" checked={ this.state.checked2 } onChange={ this.handleChange2 } />
          <label>I accept the term of the app</label><br/>

          <input type="checkbox" id="chk3" className="chk33" checked={ this.state.checked3 } onChange={ this.handleChange3 } />
          <label>I want to get the weekly news letter</label><br/>
         
          <input type="checkbox" id="chk4" className="chk44" checked={ this.state.checked4 } onChange={ this.handleChange4 } />
           <label>I want to get sales and offers</label>
        </div>
  {/*
        <div className={ togglecheck1 }>show hide div with check 1</div>
        <div className={ togglecheck2 }>show hide div with check 2</div>
        <div className={ togglecheck3 }>show hide div with check 3</div>
        <div className={ togglecheck4 }>show hide div with check 4</div>
  */}
      </div>;
    }
  }


  export default CheckedBox;
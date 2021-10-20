import React from "react";
import './style.css'
class Spinner extends React.Component{
 constructor(props){
     super(props);
     this.state={
         show: false
     }
 }
 componentDidMount(){
    setTimeout(()=>{
        this.setState({show :!this.state.show})
    },3500)
 }
 render(){
     return(
         <div>
        <div style={{display:this.state.show ? 'none' :'block'}} class="loader">Loading...</div>
        <div  style={{display:this.state.show ? 'block' :'none'},{color:'blue'}} className='data'>its my Spinner</div>
        </div>
     )
 }
}
export default Spinner
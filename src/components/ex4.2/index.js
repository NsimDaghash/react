import React from 'react';
import './styles.css'

//import imgURL from './img/nat.jpg';
class Card extends React.Component{
    constructor({imgURL,title,text,link}){
        super();
        this.props = {imgURL,title,text,link}
    }
    render(){
        return (
        <div className='card'>
            <img width={'100%'} repeat='no-repeat' src={this.props.imgURL}></img>
            <div className={'bottum-card'}>
                <h2>{this.props.title}</h2>
                <p>{this.props.text}</p>
                <div className={'bottum-card'}>
                    <a href={this.prope.link} className='link'>Share</a> 
                    <a href='#' className='link'>Explore</a></div>
                </div>
            </div>
        ); 
    }   
}

export default Card;
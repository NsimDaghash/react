import React from 'react';
import './styles.css'

//import imgURL from './img/nat.jpg';
class Card extends React.Component{
    constructor({imgURL,title,text,link}){
        super({imgURL,title,text,link});
        this.imgURL = imgURL;
        this.title=title;
        this.text=text;
        this.link=link;
    }
    render(){
        return (
        <div className='card'>
            <img height={'500px'} repeat='no-repeat' src={this.imgURL}></img>
            <div className={'bottum-card'}>
                <h2>{this.title}</h2>
                <p>{this.text}</p>
                <div className={'bottum-card'}>
                    <a href={this.link} className='link'>Share</a> 
                    <a href='#' className='link'>Explore</a></div>
                </div>
            </div>
        ); 
    }   
}

export default Card;
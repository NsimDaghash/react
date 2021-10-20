import React from "react";
import "./style.css";

class Jokes extends React.Component {
constructor(props) {
    super(props);
    this.state = { 
        jokes: "",
        categories :[]
    };
    }
    getJoke=async()=>{
         try {
           let data = await (
             await fetch("https://api.chucknorris.io/jokes/random")
           ).json();
           this.setState({ jokes: data.value });
           let categories = await (
            await fetch("https://api.chucknorris.io/jokes/categories")
          ).json();
          this.setState({ categories: categories.value });
          console.log(categories)
         } catch (err) {
           console.log(err);
         }
    }

    componentDidMount= async ()=> {     
            this.getJoke();
    }
    render() {
        return (
            <div className="chuckNorris">
                <div className="jokecategories"></div>
                 <input type="button" value={"Get joke"} id="joke" onClick={this.getJoke}/>
                <div className="thejoke">{this.state.jokes}</div>
            </div>
        )
    }
}
export default Jokes
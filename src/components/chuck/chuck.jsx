import React from "react";

//import logo from "./chuck.png";
//import { Alert, IconButton, InputPicker, Icon, Loader } from "rsuite";

//import "rsuite/dist/styles/rsuite.min.css";
import "./style.css";

const URL = "https://api.chucknorris.io/jokes/";

class App1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      joke: "",
      categories: [],
      category: "",
      loading: true,
      loadingJoke: false
    };

    this.setup = this.setup.bind(this);
    this.getJoke = this.getJoke.bind(this);
    this.setCategory = this.setCategory.bind(this);
  }

  componentDidMount() {
    this.setup();
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="wrapper">

        </div>
      );
    }

    return (
      <div className="wrapper">

        <div>
          {this.state.loadingJoke ? (
            <div className="loadingJoke">
          
            </div>
          ) : (
            <blockquote>
              <span className="dropcap">"</span>
              {" " + this.state.joke}
            </blockquote>
          )}
        </div>
        <div>
          <select
            data={this.state.categories}
            style={{ width: 224 }}
            placeholder="Choose Category"
            onSelect={val => {
              this.setCategory(val);
            }}
          />
          <input type="button"
            //icon={<Icon icon="arrow-right" />}
            placement="right"
            className="next"
            onClick={() => {
              this.getJoke();
            }}
          >
            Next
          </input>
        </div>
        <div />
      </div>
    );
  }

  setup() {
    this.setState({ loading: true });
    fetch(URL + "categories")
      .then(resp => resp.json())
      .then(resp => {
        const categories = resp.map(val => {
          return { label: val, value: val };
        });
        this.setState({ categories: categories });
        this.setState({ category: "random" });
      })
      .then(x => {
        return fetch(URL + "random");
      })
      .then(resp => resp.json())
      .then(resp => {
        this.setState({ joke: resp.value, loading: false });
      })
      .catch(err =>
       console.log ("Oops an unexpected error occurred! Try again later.")
      );
  }

  getJoke() {
    let url = URL + "random";
    if (this.state.category !== "random") {
      url += "?category=" + this.state.category;
    }

    this.setState({ loadingJoke: true });
    fetch(url)
      .then(resp => resp.json())
      .then(resp => {
        this.setState({ joke: resp.value });
        this.setState({ loadingJoke: false });
      })
      .catch(err =>
        console.log("Oops an unexpected error occurred! Try again later.")
      );
  }

  setCategory(category) {
    this.setState({ category: category });
  }
}

export default App1;
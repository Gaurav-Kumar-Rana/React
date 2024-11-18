import React, { Component } from "react";
import Menu from "./Menu";
import UserContext from "../utils/UserContext";

class MainClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
  }
  handleAdd = (number) => {
    this.setState({
      num: this.state.num + number,
    });
  };
  handleSub = (number) => {
    this.setState({
      num: this.state.num - number,
    });
  };
  timer = setInterval(() => {
    this.setState({
      num: this.state.num + 1,
    });
  }, 1000);
  componentWillUnmount() {
    console.log("MainClass remove");
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="main-container text-3xl font-bold underline text-center">
        <h1>My Class Component</h1>
        <h2>
          <UserContext.Consumer>
            {({ username, dateofbirth }) => (
              <span>
                {username} and your DOB is {dateofbirth}
              </span>
            )}
          </UserContext.Consumer>
        </h2>
        <button
          type="button"
          onClick={(e) => {
            this.handleSub(1);
          }}
        >
          -
        </button>
        <input
          className="m-10 bg-red-200 text-center"
          type="number"
          value={this.state.num}
          onChange={(e) => {
            this.setState({ num: +e.target.value });
          }}
        />
        <button
          type="button"
          onClick={(e) => {
            this.handleAdd(1);
          }}
        >
          +
        </button>
        <Menu />
      </div>
    );
  }
}

export default MainClass;

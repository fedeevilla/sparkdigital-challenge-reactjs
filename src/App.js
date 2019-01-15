import React, { Component } from "react";
import Text1 from "./components/Text1";
import Text2 from "./components/Text2";
import { CaesarShift, CaesarDecryption } from "./utils";
import "./App.css";
import Shift from "./components/Shift";

class App extends Component {
  constructor() {
    super();
    this.state = {
      plain: "",
      cipher: "",
      shift: 0
    };
  }

  handleChange1 = value => {
    this.setState({
      plain: value,
      cipher: CaesarShift(value, this.state.shift)
    });
  };

  handleChange2 = value => {
    this.setState({
      cipher: value,
      plain: CaesarDecryption(value, this.state.shift)
    });
  };

  handleChangeShift = value => {
    this.setState(
      {
        shift: value
      },
      () => {
        this.handleChange1(this.state.plain);
      }
    );
  };

  render() {
    return (
      <div className="App">
        <h1>Caesar Cipher</h1>
        <div>
          <Shift
            value={this.state.shift}
            handleChange={this.handleChangeShift}
          />
        </div>
        <span style={{ margin: 40 }}>
          <Text1 text={this.state.plain} handleChange={this.handleChange1} />
        </span>
        <span style={{ margin: 40 }}>
          <Text2 text={this.state.cipher} handleChange={this.handleChange2} />
        </span>
      </div>
    );
  }
}

export default App;

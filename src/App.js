import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    name: "",
    wasClicked: false,
  }

  changer = (e) => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div>
        <form>
          <input
            id="input"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.changer}
          />
          <button id="show" onClick={() => this.setState({ wasClicked: true })} type="button">Show Text</button>
          <button id="hide" onClick={() => this.setState({ wasClicked: false })} type="button">Hide Text</button>
        </form>
        {this.state.wasClicked && <h1 id="h1">{this.state.name}</h1>}
      </div>
    );
  }
}

export default App;

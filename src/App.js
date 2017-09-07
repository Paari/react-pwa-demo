import React, { Component } from 'react';
import logo from './logo.svg';
import natureImage from './img/bg.jpg';
import './App.css';

const chromeImage = 'https://developers.google.com/web/fundamentals/getting-started/codelabs/offline/img/dbc14cbb8ca35312.png';
const momo = 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?dpr=1&auto=compress,format&fit=crop&w=767&h=511&q=80&cs=tinysrgb&crop=';
const cake = 'https://images.unsplash.com/photo-1483908514687-d25c79c15df0?dpr=1&auto=compress,format&fit=crop&w=767&h=511&q=80&cs=tinysrgb&crop=';
const banner = 'https://images.unsplash.com/photo-1481391145929-5bcf567d5211';


class App extends Component {
  render() {
    const bg = `url(${banner})`
    return (
      <div className="App">
        <div className="App-header" style={{backgroundImage: bg}}>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <img src={chromeImage} alt="chromeImage" />
          <img src={natureImage} alt="natureImage" />
          <img src={cake} alt="cake" />
          <img src={momo} alt="momo" />
        </p>
      </div>
    );
  }
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 className='title'>
          Project Pertama ReactJS
        </h3>
        <p className='subtitle'>
          Belajar React itu mudah dan menyenangkan
        </p>
        </header>
    </div>
  );
  }
}

export default App;
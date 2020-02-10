import React from 'react';
import githubLogo from './github-logo.svg';
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import './App.css';

export default () => {
  return (
    <div className="App">
      <Header />
      <div className="App-header">
        <Body />
        <div className="App-logoWraper">
          <img src={githubLogo} alt={githubLogo} className="App-logo" />
          <a 
            className="App-link"
            href="className = {style.compsCont}"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

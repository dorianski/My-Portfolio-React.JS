import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Resume from './Components/Resume/Resume';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

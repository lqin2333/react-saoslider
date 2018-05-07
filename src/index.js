import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Slider from './saoslider/Slider';

ReactDOM.render(<Slider />, document.getElementById('root'));
registerServiceWorker();

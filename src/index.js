import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import HelloWorld from './HelloWorld'

ReactDOM.render(
    <HelloWorld txt = 'Hello World from component React.js by School of net'/>,
    document.getElementById("root")
)

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();

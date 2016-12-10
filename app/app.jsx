'use strict';

let React = require('react'),
    ReactDOM = require('react-dom'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router');

//style!css! are chained loaders, look in webpack.config.js
//load Foundation
$(document).foundation();
//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <p>Boilerplate 3 Project</p>,
  document.getElementById('app')
);

// require('./redux-example.jsx');
require('./redux-todo-example.jsx');

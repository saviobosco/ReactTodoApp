var React = require('react');
var ReactDOM = require('react-dom');
var TodoApp = require('TodoApp');
// App css
require('style!css!sass!applicationStyles');
$(document).foundation();
ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);

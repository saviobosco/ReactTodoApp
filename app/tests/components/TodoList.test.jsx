var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList',() => {
  it('should exists',() => {
    expect(TodoList).toExist();
  });
  it('should render one Todo component for each todo item',() => {
    var todos = [
      {
        id:1,
        text: "Do something"
      },
      {
        id:2,
        text: "Check Mail"
      }
    ];
    var todolist = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todolist,Todo);
    expect(todosComponents.length).toBe(todos.length);
  });
  it('should render empty message if no todos',() => {
    var todos = [];
    var todolist = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    let $el = ReactDOM.findDOMNode(todolist).querySelectorAll('.container__message');
    expect($el.length).toBe(1);
  });
});

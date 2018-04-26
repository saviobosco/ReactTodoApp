var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');
describe('Todo',() => {
  it('should exists',() => {
    expect(Todo).toExist();
  });
  it('should call onToggle prop with id on click',() => {
    let todoData = {
      id:199,
      text: 'Write todo.test.jsx test',
      completed: true
    };
    let spy = expect.createSpy();
        let todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
        TestUtils.Simulate.click(ReactDOM.findDOMNode(todo));
        expect(spy).toHaveBeenCalledWith(todoData.id);
  });
});

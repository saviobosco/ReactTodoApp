var expect = require('expect');
var TodoApi = require('TodoApi');

describe('TodoApi',() => {
  beforeEach( () => {
    localStorage.removeItem('todos');
  });
  it('should exist',() => {
    expect(TodoApi).toExist();
  });
  describe('setTodos',() => {
    it('should set valid todos array',() => {
      let todos = [{
        id:1,
        'text':'Test all file',
        'completed':false
      }];
      TodoApi.setTodos(todos);
      let actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toEqual(todos);
    });
    it('should not set invalid array',() => {
      var badTodos = {a:'b'};
      TodoApi.setTodos(badTodos);
      expect(localStorage.getItem('todos')).toBe(null);
    });
  });
  describe('getTodos',() => {
    it('should return empty array for bad localStorage data',() => {
      let actualTodos = TodoApi.getTodos();
      expect(actualTodos).toEqual([]);
    })
    it ('should return todos if valid array in localStorage',() => {
      let todos = [{
        id:1,
        'text':'Test all file',
        'completed':false
      }];
      localStorage.setItem('todos',JSON.stringify(todos));
      expect(todos).toEqual(TodoApi.getTodos())
    })
  });
});

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
  describe('filterTodos',() => {
    let todos = [{
      id:1,
      'text': 'Some text here',
      completed: true
    },
    {
      id:2,
      'text': 'Other text here',
      completed: false
    },
    {
      id:3,
      'text': 'Some text here',
      completed: true
    }
  ];
  it('should return all items if showCompleted is true',() => {
    let filteredTodos = TodoApi.filterTodos(todos, true, '');
    expect(filteredTodos.length).toBe(3);
  });
  it('should return not completed items if showCompleted is false',() => {
    let filteredTodos = TodoApi.filterTodos(todos,false, '');
    expect(filteredTodos.length).toBe(1);
  });
  it('should sort by completed status',() => {
    var filteredTodos = TodoApi.filterTodos(todos,true,'');
    expect(filteredTodos[0].completed).toEqual(false);
  });
  it('should filter todo by searchText',() => {
    let filteredTodos = TodoApi.filterTodos(todos, true, 'some');
    expect(filteredTodos.length).toBe(2);
  });
  it('should return all todos if searchText is empty',() => {
    let filteredTodos = TodoApi.filterTodos(todos, true, '');
    expect(filteredTodos.length).toBe(3);
  });
  });
});

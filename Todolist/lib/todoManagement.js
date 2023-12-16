import { Todo } from "../../../../../../todo.js";
class TodoManagement {
    constructor() {
      this.todos = [];
    }
  
    // Adds a new todo to the end of todos array, returns the new length of the array
    addTodo(desc) {
      const todo = new Todo(desc);
      this.todos.push(todo);
      return todo.id;
    }
  
    // Returns a todo object that its id equals to searchId
    findTodo(searchId) {
      return this.todos.find(todo => todo.id === searchId);
    }
  
    // Returns an index of todo that its id equals to searchId
    findIndexTodo(searchId) {
      return this.todos.findIndex(todo => todo.id === searchId);
    }
  
    // Removes a todo that its id equals to removeId
    removeTodo(removeId) {
      const index = this.findIndexTodo(removeId);
      if (index !== -1) {
        this.todos.splice(index, 1);
      }
    }
  
    // Returns todos array
    getTodos() {
      return this.todos;
    }
  
    // Returns the number of todos in the 'Done' state
    getNumberOfDone() {
      return this.todos.filter(todo => todo.done).length;
    }
  
    // Returns the number of todos in the 'Not Done' state
    getNumberOfNotDone() {
      return this.todos.filter(todo => !todo.done).length;
    }
  
    // Resets todos array to empty
    clearTodos() {
      this.todos = [];
    }
  }
  
  module.exports = TodoManagement;
  
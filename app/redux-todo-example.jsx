let redux = require('redux');
console.log('strating todo redux example');

let stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};


let reducer = ((state = stateDefault, action) => {
  return state;
})

let store = redux.createStore(reducer);
let currentState = store.getState();


console.log(currentState)

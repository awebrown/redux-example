let redux = require('redux');
console.log('starting redux example');


//Reducer needs to satisfy two things:
//1. that it has a default state, 2. the reducer func returns a state

let reducer = (state = {name: 'Anonymous'}, action) => {
  // state = state || {name: 'Anonymous'};
  return state;
};

let store = redux.createStore(reducer);

let currentState = store.getState();
console.log('currentState', currentState);

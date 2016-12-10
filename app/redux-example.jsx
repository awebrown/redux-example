let redux = require('redux');
console.log('starting redux example');


//Reducer needs to satisfy two things:
//1. that it has a default state, 2. the reducer func returns a state

let reducer = (state = {name: 'Anonymous'}, action) => {
  // state = state || {name: 'Anonymous'};

  console.log('New action: ', action);
  switch(action.type) {
    case 'CHANGE_NAME' :
      return {
        ...state,
        name: action.name
      };
      default:
        return state;
  }
};

let store = redux.createStore(reducer);

console.log('currentState', store.getState());

//all actions need to be objs
store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Tony'
});

console.log('Name should be Tony', store.getState());

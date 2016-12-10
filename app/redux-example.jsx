let redux = require('redux');
console.log('starting redux example');


//Reducer needs to satisfy two things:
//1. that it has a default state, 2. the reducer func returns a state

let reducer = (state = {name: 'Anonymous'}, action) => {
  // state = state || {name: 'Anonymous'};
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

let store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));


let unsubscribe = store.subscribe(() => {
  let state = store.getState();
  console.log('Name is: ', state.name);
  document.getElementById('app').innerHTML = state.name;
});

// unsubscribe();

console.log('CurrentState: ', store.getState())

//all actions need to be objs
store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Tony'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Emily'
});

let redux = require('redux');
console.log('strating todo redux example');

let stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};

let reducer = ((state = stateDefault, action) => {
  switch(action.type) {
    case 'CHANGE_SEARCHTEXT' :
      return {
        ...state,
        searchText: action.searchText
      };
    default :
      return state;
  }
});

let store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

console.log('current state: ', store.getState());


let unsubscribe = store.subscribe(() => {
  let state = store.getState();
  document.getElementById('app').innerHTML = state.searchText;
})

//dispatch the action, takes an obj, always has a type
store.dispatch({
  type: 'CHANGE_SEARCHTEXT',
  searchText: 'Updated serch text!',
});

// unsubscribe();

store.dispatch({
  type: 'CHANGE_SEARCHTEXT',
  searchText: 'This is Text!!!',
});

console.log('updated state: ', store.getState());

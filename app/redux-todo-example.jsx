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

let store = redux.createStore(reducer);

console.log('current state: ', store.getState());

//dispatch the action, takes an obj, always has a type
store.dispatch({
  type: 'CHANGE_SEARCHTEXT',
  searchText: 'Updated serch text!',
  showCompleted: true
});

console.log('updated state: ', store.getState());

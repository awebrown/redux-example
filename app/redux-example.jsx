let redux = require('redux');
console.log('starting redux example');

let actions = require('./actions/index');
let store = require('./store/configureStore').configure();
let unsubscribe = store.subscribe(() => {
  let state = store.getState();

  console.log('New State', store.getState());

  if(state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  } else if(state.map.url) {
    document.getElementById('app').innerHTML = '<a href="'+ state.map.url + '" target="_blank">View your location</a>'
  }
});

//unsubscribe();

console.log('CurrentState: ', store.getState());

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Tony'));

store.dispatch(actions.addHobby('running'));
store.dispatch(actions.addHobby('cooking'));
store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changeName('Emily'));

store.dispatch(actions.addMovie('Boy A', 'Drama'));
store.dispatch(actions.addMovie('Garfield', 'Comedy'));
store.dispatch(actions.addMovie('Star Wars', 'Action'));
store.dispatch(actions.removeMovie(2));

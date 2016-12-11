let redux = require('redux');
console.log('starting redux example');


//Reducer needs to satisfy two things:
//1. that it has a default state, 2. the reducer func returns a state

let stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
}

let nextHobbyId = 1;
let newMovieId = 1;

let nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
      break;
    default:
      return state;
  }
}

let hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ];
      case 'REMOVE_HOBBY' :
        return state.filter((hobby) => hobby.id !== action.id)
      default:
        return state;
  }
}

let moviesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MOVIE' :
      return [
        ...state,
          {
            id: newMovieId++,
            title: action.title,
            genre: action.genre
          }
        ]
    case 'REMOVE_MOVIE' :
      return state.filter((movie) => movie.id !== action.id)
    default:
      return state;
  }
}

let reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
})

let store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));


let unsubscribe = store.subscribe(() => {
  let state = store.getState();

  console.log('Name is: ', state.name);
  document.getElementById('app').innerHTML = state.name;
  console.log('New State', store.getState());
});

// unsubscribe();

console.log('CurrentState: ', store.getState());

//all actions need to be objs
store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Tony'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'running'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'cooking'
});

store.dispatch({
    type: 'REMOVE_HOBBY',
    id: 2
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Emily'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Boy A',
  genre: 'Drama'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Garfield',
  genre: 'Comedy'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Star Wars',
  genre: 'Action'
});

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 2
});

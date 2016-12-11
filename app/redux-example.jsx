let redux = require('redux');
console.log('starting redux example');
//Reducer needs to satisfy two things:
//1. that it has a default state, 2. the reducer func returns a state

//Name reducer and action generators
//-----------------------
let nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
      break;
    default:
      return state;
  };
};

let changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  }
};

//Hobbies reducer and action generators
//-----------------------
let nextHobbyId = 1;
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
  };
};

let addHobby = (hobby) => {
    return {
      type: 'ADD_HOBBY',
      hobby
    };
  };

let removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  };
};

//Movies reducer and action generators
//-----------------------
let nextMovieId = 1;
let moviesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MOVIE' :
      return [
        ...state,
          {
            id: nextMovieId++,
            title: action.title,
            genre: action.genre
          }
        ]
    case 'REMOVE_MOVIE' :
      return state.filter((movie) => movie.id !== action.id)
    default:
      return state;
  };
};

let addMovie = (title, genre) => {
    return {
      type: 'ADD_MOVIE',
      title,
      genre
    };
  };

let removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  };
};

//-----------------------

let reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
});

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
store.dispatch(changeName('Tony'));

store.dispatch(addHobby('running'));

store.dispatch(addHobby('cooking'));

store.dispatch(removeHobby(2));

store.dispatch(changeName('Emily'));

store.dispatch(addMovie('Boy A', 'Drama'));

store.dispatch(addMovie('Garfield', 'Comedy'));

store.dispatch(addMovie('Star Wars', 'Action'));

store.dispatch(removeMovie(2));

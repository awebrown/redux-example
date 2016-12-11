//Reducer needs to satisfy two things:
//1. that it has a default state, 2. the reducer func returns a state
export let nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
      break;
    default:
      return state;
  };
};

let nextHobbyId = 1;
export let hobbiesReducer = (state = [], action) => {
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

let nextMovieId = 1;
export let moviesReducer = (state = [], action) => {
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

export let mapReducer = (state = {isFetching: false, url: undefined}, action) => {
  switch (action.type) {
    case 'START_LOCATION_FETCH' :
      return {
        isFetching: true,
        url: undefined
      };
    case 'COMPLETE_LOCATION_FETCH' :
      return {
        isFetching: false,
        url: action.url
      };
    default:
      return state;
  }
};

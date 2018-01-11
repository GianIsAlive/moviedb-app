import { combineReducers } from 'redux';

import headerReducer from '../component/Header/headerReducer';
import popularMoviesReducer from '../component/PopularMovies/popularMoviesReducer';

const RootReducer = combineReducers({
  headerReducer,
  popularMoviesReducer
});

export default RootReducer;

import { combineReducers } from 'redux';

import HeaderReducer from '../component/Header/HeaderReducer';
import MovieContainerReducer from '../component/MovieContainer/MovieContainerReducer';
import PopularMovies from '../component/PopularMovies/PopularMoviesReducer';

const RootReducer = combineReducers({
  HeaderReducer,
  MovieContainerReducer,
  PopularMovies,
});

export default RootReducer;

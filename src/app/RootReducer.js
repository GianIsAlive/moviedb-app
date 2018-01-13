import { combineReducers } from 'redux';

import headerReducer from '../component/Header/headerReducer';
import searchResultReducer from '../component/SearchResult/searchResultReducer';
import popularMoviesReducer from '../component/PopularMovies/popularMoviesReducer';
import movieDetailsReducer from '../component/MovieDetails/movieDetailsReducer';
import footerReducer from '../component/Footer/footerReducer';

const RootReducer = combineReducers({
  headerReducer,
  searchResultReducer,
  popularMoviesReducer,
  movieDetailsReducer,
  footerReducer
});

export default RootReducer;

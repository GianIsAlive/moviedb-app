import { combineReducers } from 'redux';

import headerReducer from '../component/Header/headerReducer';
import popularMoviesReducer from '../component/PopularMovies/popularMoviesReducer';
import footerReducer from '../component/Footer/footerReducer';

const RootReducer = combineReducers({
  headerReducer,
  popularMoviesReducer,
  footerReducer
});

export default RootReducer;

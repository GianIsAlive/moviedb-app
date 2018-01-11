import { connect } from 'react-redux';

import PopularMoviesView from './PopularMoviesView';

const mapPropsToState = (state) => {
  console.log('This is state: ', state);
  return state.popularMoviesReducer;
};

const PopularMovies = connect(mapPropsToState)(PopularMoviesView);

export default PopularMovies;

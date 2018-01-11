import { connect } from 'react-redux';

import PopularMoviesView from './PopularMoviesView';

const mapPropsToState = state => state.popularMoviesReducer;

const PopularMovies = connect(mapPropsToState)(PopularMoviesView);

export default PopularMovies;

import { connect } from 'react-redux';

import MovieDetailsView from './MovieDetailsView';

const mapStateToProps = state => state.movieDetailsReducer;

const MovieDetails = connect(mapStateToProps)(MovieDetailsView);

export default MovieDetails;

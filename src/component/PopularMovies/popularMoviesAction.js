import axios from 'axios';

function getPopularMovies(query) {
  return new Promise((resolve, reject) => {
    axios.get(`/popular-movies${query}`)
      .then(data => resolve(data))
      .catch(() => reject('Can not access movies'));
  });
}

function displayPopularMovies(popularMovies) {
  return {
    type: 'DISPLAY_POPULAR_MOVIES',
    popularMovies
  };
}

function submitPopularMoviesReqeust(query) {
  return function (dispatch) {
    return getPopularMovies(query).then(data => dispatch(displayPopularMovies(data.data)));
  };
}

export default submitPopularMoviesReqeust;

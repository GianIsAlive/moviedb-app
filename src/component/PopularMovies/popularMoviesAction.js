import axios from 'axios';

const getPopularMovies = query => (
  new Promise((resolve, reject) => {
    axios.get(`/popular-movies${query}`)
      .then(data => resolve(data))
      .catch(() => reject('Can not access movies'));
  })
);

const displayPopularMovies = popularMovies => ({
  type: 'DISPLAY_POPULAR_MOVIES',
  popularMovies
});

const submitPopularMoviesReqeust = query => (
  dispatch => (
    getPopularMovies(query).then(data => dispatch(displayPopularMovies(data.data)))
  )
);

export default submitPopularMoviesReqeust;

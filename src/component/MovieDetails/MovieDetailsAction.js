import axios from 'axios';

const getMovieDetails = id => (
  new Promise((resolve, reject) => {
    axios.get(`/movie${id}`)
      .then(details => resolve(details))
      .catch(() => reject('Sorry, we couldn\'t get movie details...'));
  })
);

const displayMovieDetails = details => ({
  type: 'DISPLAY_MOVIE_DETAILS',
  details
});

export const submitMovieDetailsRequest = id => (
  dispatch => (
    getMovieDetails(id).then(details => dispatch(displayMovieDetails(details.data)))
  )
);

const getRecommendations = id => (
  new Promise((resolve, reject) => {
    axios.get(`/recommend${id}`)
      .then(data => resolve(data))
      .catch(() => reject('Sorry, we couldn\'t find recommendations...'));
  })
);

const displayRecommendations = recommendations => ({
  type: 'DISPLAY_RECOMMENDATIONS',
  recommendations
});

export const submitRecommendationRequest = id => (
  dispatch => (
    getRecommendations(id).then(data => dispatch(displayRecommendations(data.data)))
  )
);

const getCast = id => (
  new Promise((resolve, reject) => {
    axios.get(`/cast${id}`)
      .then(data => resolve(data))
      .catch(() => reject('Sorry, we could\'t get casts...'));
  })
);

const displayCast = casts => ({
  type: 'DISPLAY_CAST',
  casts
});

export const submitCastRequest = id => (
  dispatch => (
    getCast(id).then(data => dispatch(displayCast(data.data)))
  )
);

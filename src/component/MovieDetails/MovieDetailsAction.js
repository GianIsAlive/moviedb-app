import axios from 'axios';

function getMovieDetails(id) {
  return new Promise((resolve, reject) => {
    axios.get(`/movie${id}`)
      .then(details => resolve(details))
      .catch(() => reject('Sorry, we couldn\'t get movie details...'));
  });
}

function displayMovieDetails(details) {
  return {
    type: 'DISPLAY_MOVIE_DETAILS',
    details
  };
}

export function submitMovieDetailsRequest(id) {
  return function (dispatch) {
    return getMovieDetails(id).then(details => dispatch(displayMovieDetails(details.data)));
  };
}

function getRecommendations(id) {
  return new Promise((resolve, reject) => {
    axios.get(`/recommend${id}`)
      .then(data => resolve(data))
      .catch(() => reject('Sorry, we couldn\'t find recommendations...'));
  });
}

function displayRecommendations(recommendations) {
  return {
    type: 'DISPLAY_RECOMMENDATIONS',
    recommendations
  };
}

export function submitRecommendationRequest(id) {
  return function (dispatch) {
    return getRecommendations(id).then(data => dispatch(displayRecommendations(data.data)));
  };
}

function getCast(id) {
  return new Promise((resolve, reject) => {
    axios.get(`/cast${id}`)
      .then(data => resolve(data))
      .catch(() => reject('Sorry, we could\'t get casts...'));
  });
}

function displayCast(casts) {
  return {
    type: 'DISPLAY_CAST',
    casts
  };
}

export function submitCastRequest(id) {
  return function (dispatch) {
    return getCast(id).then(data => dispatch(displayCast(data.data)));
  };
}

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

export function submitPopularMoviesReqeust(query) {
  return function (dispatch) {
    return getPopularMovies(query).then(data => dispatch(displayPopularMovies(data.data)));
  };
}

let counter = 2;

export function goToNextPage() {
  return {
    type: 'GO_TO_NEXT_PAGE',
    pageNumber: counter++
  };
}

export function goToPreviousPage() {
  return {
    type: 'GO_TO_PREVIOUS_PAGE',
    pageNumber: counter--
  };
}

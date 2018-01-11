import axios from 'axios';

function getPopularMovies() {
  return new Promise((resolve, reject) => {
    axios.get('/movies')
      .then(data => resolve(data.data))
      .catch(() => reject('Can not access movies'));
  });
}

function seeData(data) {
  return {
    type: 'SEE_DATA',
    data
  };
}

function displayPopularMovies() {
  return function (dispatch) {
    return getPopularMovies().then(data => dispatch(seeData(data)));
  };
}

export default displayPopularMovies;

import axios from 'axios';

function getSearchResults(query) {
  return new Promise((resolve, reject) => {
    axios.get(`/search${query}`)
      .then(data => resolve(data.data))
      .catch(() => reject('Couldn\'t find search result.'));
  });
}

function displaySearchResults(data) {
  return {
    type: 'DISPLAY_SEARCH_RESULT',
    data
  };
}

function submitSearch(query) {
  return function (dispatch) {
    return getSearchResults(query).then(data => dispatch(displaySearchResults(data)));
  };
}

export default submitSearch;

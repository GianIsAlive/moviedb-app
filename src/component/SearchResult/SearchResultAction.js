import axios from 'axios';

const getSearchResults = query => (
  new Promise((resolve, reject) => {
    axios.get(`/search${query}`)
      .then(data => resolve(data.data))
      .catch(() => reject('Couldn\'t find search result.'));
  })
);

const displaySearchResults = data => ({
  type: 'DISPLAY_SEARCH_RESULT',
  data
});

const submitSearch = query => (
  dispatch => (
    getSearchResults(query).then(data => dispatch(displaySearchResults(data)))
  )
);

export default submitSearch;

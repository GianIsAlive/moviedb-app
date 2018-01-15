const initialState = {
  pageNumber: 1
};

const handleAction = (state = initialState, action) => {
  switch (action.type) {
    case 'DISPLAY_POPULAR_MOVIES':
      return {
        popularMovies: action.popularMovies,
        pageNumber: state.pageNumber
      };
    case 'GO_TO_NEXT_PAGE':
      return {
        popularMovies: state.popularMovies,
        pageNumber: action.pageNumber
      };
    case 'GO_TO_PREVIOUS_PAGE':
      return {
        popularMovies: state.popularMovies,
        pageNumber: action.pageNumber
      };
    default:
      return state;
  }
};

export default handleAction;

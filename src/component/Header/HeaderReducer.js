const initialState = {
  inputValue: ''
};

function handleAction(state = initialState, action) {
  switch (action.type) {
    case 'HANDLE_CHANGE':
      return {
        inputValue: action.inputValue
      };
    case 'SUBMIT_SEARCH':
      return {
        inputValue: '',
        movieName: action.movieName
      };
    default:
      return state;
  }
}

export default handleAction;

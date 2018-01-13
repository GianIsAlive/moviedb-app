const initialState = {
  query: ''
};

function handleAction(state = initialState, action) {
  switch (action.type) {
    case 'HANDLE_CHANGE':
      return {
        query: action.query
      };
    default:
      return state;
  }
}

export default handleAction;

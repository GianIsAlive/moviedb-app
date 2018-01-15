const initialState = {
  query: ''
};

const handleAction = (state = initialState, action) => {
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

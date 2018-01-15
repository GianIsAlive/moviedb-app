const handleAction = (state = {}, action) => {
  switch (action.type) {
    case 'DISPLAY_SEARCH_RESULT':
      return {
        data: action.data
      };
    default:
      return state;
  }
};

export default handleAction;

const initialState = {
  pageNumber: 1
};

function handleAction(state = initialState, action) {
  switch (action.type) {
    case 'GO_TO_NEXT_PAGE':
      return {
        pageNumber: action.pageNumber
      };
    case 'GO_TO_PREVIOUS_PAGE':
      return {
        pageNumber: action.pageNumber
      };
    case 'RESET_PAGE_NUMBER':
      return {
        pageNumber: action.pageNumber
      };
    default:
      return state;
  }
}

export default handleAction;

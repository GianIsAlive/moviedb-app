function handleAction(state = {}, action) {
  switch (action.type) {
    case 'SEE_DATA':
      return {
        data: action.data
      };
    default:
      return state;
  }
}

export default handleAction;

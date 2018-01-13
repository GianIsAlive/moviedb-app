function handleAction(state = {}, action) {
  switch (action.type) {
    case 'DISPLAY_MOVIE_DETAILS':
      return {
        details: action.details,
        recommendations: state.recommendations,
        casts: state.casts
      };
    case 'DISPLAY_RECOMMENDATIONS':
      return {
        details: state.details,
        recommendations: action.recommendations,
        casts: state.casts
      };
    case 'DISPLAY_CAST':
      return {
        details: state.details,
        recommendations: state.recommendations,
        casts: action.casts
      };
    default:
      return state;
  }
}

export default handleAction;

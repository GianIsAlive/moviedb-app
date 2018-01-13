export function goToNextPage() {
  return {
    type: 'GO_TO_NEXT_PAGE'
  };
}

export function goToPreviousPage() {
  return {
    type: 'GO_TO_PREVIOUS_PAGE'
  };
}

export function resetPageNumber() {
  return {
    type: 'RESET_PAGE_NUMBER'
  };
}

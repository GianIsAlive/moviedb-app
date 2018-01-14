export function goToNextPage(pageNumber) {
  return {
    type: 'GO_TO_NEXT_PAGE',
    pageNumber
  };
}

export function goToPreviousPage(pageNumber) {
  return {
    type: 'GO_TO_PREVIOUS_PAGE',
    pageNumber
  };
}

export function resetPageNumber() {
  return {
    type: 'RESET_PAGE_NUMBER',
    pageNumber: 1
  };
}

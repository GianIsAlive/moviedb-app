export function changePageNumber(pageNumber) {
  return {
    type: 'CHANGE_PAGE_NUMBER',
    pageNumber
  };
}

export function resetPageNumber() {
  return {
    type: 'RESET_PAGE_NUMBER',
    pageNumber: 1
  };
}

export const changePageNumber = pageNumber => ({
  type: 'CHANGE_PAGE_NUMBER',
  pageNumber
});

export const resetPageNumber = () => ({
  type: 'RESET_PAGE_NUMBER',
  pageNumber: 1
});

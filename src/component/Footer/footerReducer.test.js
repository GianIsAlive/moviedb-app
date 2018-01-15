import handleAction from './footerReducer';

test('If action type is undefined, reducer should return { pageNumber: 1 }', () => {
  expect(handleAction({ pageNumber: 1 }, { pageNumber: 5 }).pageNumber).toBe(1);
});

test('If action type is \'CHANGE_PAGE_NUMBER\', reducer should return { pageNumber: 2 }', () => {
  expect(handleAction({ pageNumber: 1 }, {
    type: 'CHANGE_PAGE_NUMBER',
    pageNumber: 2
  }).pageNumber).toBe(2);
});

test('If action type is \'RESET_PAGE_NUMBER\', reducer should return { pageNumber: 3 }', () => {
  expect(handleAction({ pageNumber: 1 }, {
    type: 'RESET_PAGE_NUMBER',
    pageNumber: 3
  }).pageNumber).toBe(3);
});

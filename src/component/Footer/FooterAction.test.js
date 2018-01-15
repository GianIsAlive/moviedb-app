import {
  changePageNumber,
  resetPageNumber
} from './FooterAction';

test('Input 1 should return 1', () => {
  expect(changePageNumber(1).pageNumber).toBe(1);
});

test('Input 5 should return 1', () => {
  expect(resetPageNumber(5).pageNumber).toBe(1);
});

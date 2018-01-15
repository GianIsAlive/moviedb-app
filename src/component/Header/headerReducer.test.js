import handleAction from './headerReducer';

test('If action type is not defined, reducer should return { query: \'\' }', () => {
  expect(handleAction({ query: '' }, { query: '1' }).query).toBe('');
});

test('If action type is \'HANDLE_CHANGE\', reducer should return { query: \'1\' }', () => {
  expect(handleAction({ query: '' }, {
    type: 'HANDLE_CHANGE',
    query: '1'
  }).query).toBe('1');
});

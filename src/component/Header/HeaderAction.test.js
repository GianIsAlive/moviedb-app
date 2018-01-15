import handleChange from './HeaderAction';

test('Input http://moviedb.com should return http://moviedb.com', () => {
  return expect(handleChange('http://moviedb.com').query).toBe('http://moviedb.com');
});

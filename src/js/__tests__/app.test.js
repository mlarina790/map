import ErrorRepository from '../app';

test('Should output Not found', () => {
  const expected = 'Not Found';

  const newError = new ErrorRepository(404, 'Not Found');
  const result = newError.translate(404);
  expect(result).toEqual(expected);
});

test('Should output Unknown error', () => {
  const expected = 'Unknown error';

  const newError = new ErrorRepository(404, 'Not Found');
  const result = newError.translate(400);
  expect(result).toEqual(expected);
});

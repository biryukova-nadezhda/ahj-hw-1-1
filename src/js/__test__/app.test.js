import demo from '../app';

test('desc', () => {
  const expected = 2;
  const result = demo(1, 1);
  expect(result).toBe(expected);
});

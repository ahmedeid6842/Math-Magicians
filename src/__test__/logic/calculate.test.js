import calculate from '../../logic/calculate';

test('AC button should return an empty object', () => {
  expect(calculate({ total: '5', next: '3', operation: '+' }, 'AC')).toEqual({
    total: null,
    next: null,
    operation: null,
  });
});
test('should concatenate numbers to next when an operation is present', () => {
  expect(calculate({ total: '5', next: '3', operation: '+' }, '2')).toEqual({
    total: '5',
    next: '32',
    operation: '+',
  });
});
test('pressing 0 when next is 0 should return an empty object', () => {
  expect(calculate({ total: '5', next: '0', operation: '+' }, '0')).toEqual({});
});
test('should do nothing when decimal point is added to next and there is already a decimal point', () => {
  expect(calculate({ total: '5', next: '3.', operation: null }, '.')).toEqual({
    total: '5',
    next: '3.',
    operation: null,
  });
});
test('should negate next when +/- button is pressed and next is present', () => {
  expect(calculate({ total: '5', next: '3', operation: '+' }, '+/-')).toEqual({
    total: '5',
    next: '-3',
    operation: '+',
  });
});
test('should negate total when +/- button is pressed and total is present', () => {
  expect(calculate({ total: '5', next: null, operation: null }, '+/-')).toEqual(
    {
      total: '-5',
      next: null,
      operation: null,
    },
  );
});

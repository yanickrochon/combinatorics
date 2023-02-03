import { combination } from '../src/combination';

describe('Testing combination', () => {
  test('k = 0', () => {
    expect(combination(2, 0)).toEqual(0);
  });

  test('k = 1', () => {
    expect(combination(2, 1)).toEqual(2);
  });

  test('k = 2', () => {
    expect(combination(4, 2)).toEqual(6);
    expect(combination(10000, 2)).toEqual(49995000);
  });

  test('k = 4', () => {
    expect(combination(100, 4)).toEqual(3921225);
  });
});

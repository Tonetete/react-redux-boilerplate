import { isObject, isArray } from './index';

describe('map validators', () => {
  it('should return true if passed is an object type', () => {
    expect(isObject({})).toBeTruthy();
  });
  it('should return true if passed is an array type', () => {
    expect(isArray([])).toBeTruthy();
  });
});

import { add } from '../src/tryingTEST';
 
describe('testing index file', () => {
  test('empty string should result in zero', () => {
    expect(add('')).toBe(0);
  });
});
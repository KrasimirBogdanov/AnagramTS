import { fillMatchedWords } from './anagram';
 
describe('testing anagram', () => {
  test('inputed word "melon" should matched 4 words ',() => {
    expect(fillMatchedWords().length).toBe(4);
  });
});
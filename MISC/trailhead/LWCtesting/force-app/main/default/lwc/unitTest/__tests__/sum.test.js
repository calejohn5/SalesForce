// import from sum.js
import { sum } from '../sum';

// describe function - test suite accepting 2 args, first is name of unit test, second is callback hlding tests
describe('sum()', () => {

//it function - 2 args first is whats expected, verb. second is builds up the test....  expect is the success condition
    it('should add 1 and 2 returning 3', () => {
    expect(sum(1, 2)).toBe(3);
// can do stuff like 
//expect(sum(1, 2)).not.toBeGreaterThan(3);
  });
});
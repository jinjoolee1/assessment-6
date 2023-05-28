const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  // CODE HERE
  const testArr = [1,2,3,4,5]

  test('Shuffled Array returns an array', () => {expect(Array.isArray(shuffleArray(testArr))).toBe(true)
  })
});

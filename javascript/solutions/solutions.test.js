const testCases = [{
  input: {startNum: 0, endNum: 10},
  output: [2,3,5,7]
}, {
  input: {startNum: 0, endNum: 100},
  output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
}, {
  input: {startNum: 10, endNum: 100},
  output: [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
}];

for(let i = 1; i <= 2; i++) {
  describe(`solution${i}`, () => {
    testCases.forEach(({input, output}) => {
      it(`output should be ${JSON.stringify(output)} when input is ${JSON.stringify(input)}`, () => {
        const getListOfPrimeNumbers = require(`./solution${i}`);
        const result = getListOfPrimeNumbers(input);

        expect(result).toStrictEqual(output);
      });
    });
  });
}

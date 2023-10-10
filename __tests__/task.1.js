const rewire = require('rewire');

describe('1. isFourLetters', () => {
  it('`isFourLetters` function exists', () => {
    const solution = rewire('../solution');
    const isFourLetters = solution.__get__('isFourLetters');
    expect(isFourLetters).toBeDefined();
  });
  it('Should take an array of strings and  return all the words in that array that are exactly four letters long', () => {
    const solution = rewire('../solution');
    const isFourLetters = solution.__get__('isFourLetters');
    const arr = ['John', 'James', 'Jack', 'Jeanne', 'Jean', 'many', 'manuel'];
    const fourLetterWords = ['John', 'Jack', 'Jean', 'many'];
    expect(isFourLetters(arr)).toEqual(fourLetterWords);
  });
});

describe('2. getMonthName', () => {
  it('`getMonthName` function exists', () => {
    const solution = rewire('../solution');
    const getMonthName = solution.__get__('getMonthName');
    expect(getMonthName).toBeDefined();
  });
  it('Should take a number (from 1 to 12) and return its corresponding month name as a string.', () => {
    const solution = rewire('../solution');
    const getMonthName = solution.__get__('getMonthName');
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    for (let i = 1; i <= 12; i++) {
      expect(getMonthName(i)).toBe(months[i - 1]);
    }
    expect(getMonthName(8)).toMatch(/August/i);
  });
});

describe('3. amplifyMultiplesOfFour', () => {
  it('`amplifyMultiplesOfFour` function exists', () => {
    const solution = rewire('../solution');
    const amplifyMultiplesOfFour = solution.__get__('amplifyMultiplesOfFour');
    expect(amplifyMultiplesOfFour).toBeDefined();
  });
  it('Should take an integer and returns an array of integers ascending from 1 to the given number, with every multiples of four aplified by 10', () => {
    const solution = rewire('../solution');
    const amplifyMultiplesOfFour = solution.__get__('amplifyMultiplesOfFour');
    expect(amplifyMultiplesOfFour(25)).toEqual([
      1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19,
      200, 21, 22, 23, 240, 25,
    ]);
    expect(amplifyMultiplesOfFour(3)).toEqual([1, 2, 3]);
    expect(amplifyMultiplesOfFour(1)).toEqual([1]);
  });
});

describe('4. Being unique is cool', () => {
  it('`unique` function exists', () => {
    const solution = rewire('../solution');
    const unique = solution.__get__('unique');
    expect(unique).toBeDefined();
  });
  it('Should take an array of numbers and returns the unique numbers.', () => {
    const solution = rewire('../solution');
    const unique = solution.__get__('unique');
    expect(unique([0, 0, 0.77, 0, 0])).toEqual([0.77]);
    expect(unique([0, 0, 0.77, 0, 5, 0])).toEqual([0.77, 5]);
  });
});

describe('5. c4n y0u r34d th15?', () => {
  it('`code` function exists', () => {
    const solution = rewire('../solution');
    const code = solution.__get__('code');
    expect(code).toBeDefined();
  });
  it('Should take a string as an argument and returns a coded (h4ck3r 5p34k) version of the string', () => {
    const solution = rewire('../solution');
    const encode = solution.__get__('code');
    expect(encode('javascript is cool')).toEqual(
      expect.stringMatching(/j4v45cr1pt 15 c00l/i)
    );
    expect(encode('programming is fun')).toEqual(
      expect.stringMatching(/pr0gr4mm1ng 15 fun/i)
    );
    expect(encode('become a coder')).toEqual(
      expect.stringMatching(/b3c0m3 4 c0d3r/i)
    );
  });
});

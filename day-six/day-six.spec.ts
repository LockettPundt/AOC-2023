import { splitByNewLine } from '../utils/helpers';
import { waitForIt } from './wait-for-it';

describe(`Day six`, () => {
  it(`Part one`, () => {
    const data = splitByNewLine(`test-data.txt`, __dirname);
    const result = waitForIt(data);
    expect(result).toEqual(288);
  });

  xit(`Part two`, () => {
    const data = splitByNewLine(`test-data.txt`, __dirname);
    const result = waitForIt(data);
    expect(result).toEqual(281);
  });
});

import { splitByNewLine } from '../utils/helpers';
import { waitForIt } from './wait-for-it';

describe(`Day six`, () => {
  it(`Part one`, () => {
    const data = splitByNewLine(`test-data.txt`, __dirname);
    const result = waitForIt(data);
    expect(result.eachRaceResult).toEqual(288);
  });

  it(`Part two`, () => {
    const data = splitByNewLine(`test-data.txt`, __dirname);
    const result = waitForIt(data);
    expect(result.singleRaceResult).toEqual(71503);
  });
});

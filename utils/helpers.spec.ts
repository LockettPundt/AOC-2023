import { splitByNewLine } from './helpers';
import * as path from 'path';

describe(`splitByNewLine()`, () => {
  test(`WHEN passed a file name and directory THEN returns an array with each line as an index`, () => {
    const data = splitByNewLine(`test-data.txt`, __dirname);

    expect(data.length).toBe(2);
    expect(data[0]).toBe(`1234`);
    expect(data[1]).toBe(`5678`);
  });
});

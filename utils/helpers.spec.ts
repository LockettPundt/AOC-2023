import { splitByNewLine } from './helpers';

describe(`splitByNewLine()`, () => {
  test(`WHEN passed a file name and directory THEN returns an array with each line as an index`, () => {
    const data = splitByNewLine(`test-data.txt`, __dirname);

    expect(data).toHaveLength(2);
    expect(data).toMatchObject([`1234`, `5678`]);
  });
});

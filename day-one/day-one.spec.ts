import { splitByNewLine } from '../utils/helpers';
import { trubuchet } from './trebuchet';

describe(`Day one`, () => {
  it(`Part one`, () => {
    const data = splitByNewLine(`test-data.txt`, __dirname);
    const result = trubuchet(data);
    expect(result).toEqual(142);
  });

  it(`Part two`, () => {
    const data = splitByNewLine(`test-data-two.txt`, __dirname);
    const result = trubuchet(data);
    expect(result).toEqual(281);
  });
});

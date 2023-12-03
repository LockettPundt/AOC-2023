import { splitByNewLine } from '../utils/helpers';
import { gearRatios } from './gear-ratios';

describe(`Day Three`, () => {
  it(`Part one`, () => {
    const data = splitByNewLine(`test-data.txt`, __dirname);
    const result = gearRatios(data);
    expect(result).toEqual(4361);
  });
});

import { splitByNewLine, splitByRegex } from '../utils/helpers';
import { islandIslandAlmanac } from './if-you-give-a-seed-a-fertilizer';

describe(`Day five`, () => {
  it(`Part one`, () => {
    const data = splitByRegex(`test-data.txt`, __dirname, /\n\n/g);
    const result = islandIslandAlmanac(data);
    expect(result).toEqual(35);
  });
});

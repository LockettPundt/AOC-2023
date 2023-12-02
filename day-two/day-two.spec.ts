import { splitByNewLine } from '../utils/helpers';
import { snowIsland } from './snow-island';

describe(`Day Two`, () => {
  it(`Part one`, () => {
    const data = splitByNewLine(`test-data.txt`, __dirname);
    const result = snowIsland(data, { red: 12, green: 13, blue: 14 });
    expect(result.idSum).toEqual(8);
  });

  it(`Part two`, () => {
    const data = splitByNewLine(`test-data.txt`, __dirname);
    const result = snowIsland(data, { red: 12, green: 13, blue: 14 });
    expect(result.powerSum).toEqual(2286);
  });
});

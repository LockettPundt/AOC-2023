import { splitByNewLine } from '../utils/helpers';
import { waterSource } from './water-source';

describe(`Day Three`, () => {
  it(`Part one`, () => {
    const data = splitByNewLine(`data.txt`, __dirname);
    const result = waterSource(data);
    // 522726
    expect(result).toEqual(522726);
  });

  xit(`Part two`, () => {
    const data = splitByNewLine(`test-data.txt`, __dirname);
    const result = waterSource(data);
    expect(result).toEqual(2286);
  });
});

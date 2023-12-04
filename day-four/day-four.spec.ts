import { splitByNewLine } from '../utils/helpers';
import { scratchCards } from '././scratch-cards';

describe(`Day four`, () => {
  xit(`Part one`, () => {
    const data = splitByNewLine(`test-data.txt`, __dirname);
    const result = scratchCards(data);
    expect(result).toEqual(13);
  });

  it(`Part two`, () => {
    const data = splitByNewLine(`test-data.txt`, __dirname);
    const result = scratchCards(data);
    expect(result).toEqual(30);
  });
});

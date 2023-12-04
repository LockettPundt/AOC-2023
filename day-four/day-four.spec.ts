import { splitByNewLine } from '../utils/helpers';
import { scratchCards } from '././scratch-cards';

describe(`Day four`, () => {
  it(`Part one`, () => {
    const data = splitByNewLine(`test-data.txt`, __dirname);
    const result = scratchCards(data);
    expect(result.totalScore).toEqual(13);
  });

  it(`Part two`, () => {
    const data = splitByNewLine(`test-data.txt`, __dirname);
    const result = scratchCards(data);
    expect(result.totalCards).toEqual(30);
  });
});

import { splitByNewLine } from '../utils/helpers';
import { camelCards } from './camel-cards';

describe(`Day seven`, () => {
  it(`Part one`, () => {
    const data = splitByNewLine(`test-data.txt`, __dirname);
    const result = camelCards(data);
    expect(result).toEqual(6440);
  });
});

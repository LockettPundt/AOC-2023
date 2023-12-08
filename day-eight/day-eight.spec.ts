import { splitByNewLine } from '../utils/helpers';
import { hauntedWasteland } from './haunted-wasteland';

describe(`Day seven`, () => {
  it(`Part one`, () => {
    const data = splitByNewLine(`data.txt`, __dirname);
    const result = hauntedWasteland(data);
    expect(result).toEqual(2);
  });
});

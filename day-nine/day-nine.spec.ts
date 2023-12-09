import { splitByNewLine } from '../utils/helpers';
import { mirageMaintenance } from './mirage-maintenance';

describe(`Day seven`, () => {
  it(`Part one`, () => {
    const data = splitByNewLine(`test-data.txt`, __dirname);
    const result = mirageMaintenance(data);
    expect(result).toEqual(114);
  });
});

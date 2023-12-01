import * as fs from 'fs';
import * as path from 'path';

export const splitByNewLine = (fileName: string, filePath: string): string[] => {
  const file = path.join(filePath, `./`, fileName);
  const data = fs.readFileSync(file, 'utf-8');
  return data.split(/\n/g);
};

export const splitByRegex = (fileName: string, filePath: string, regex: RegExp): string[] => {
  const file = path.join(filePath, `./`, fileName);
  const data = fs.readFileSync(file, 'utf-8');
  return data.split(regex);
};

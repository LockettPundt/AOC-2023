export const gearRatios = (data: string[]): number => {
  const engine = data.map((row) => row.split(``));
  const engineParts: number[] = [];

  for (let j = 0; j < engine.length; j++) {
    const engineRow = engine[j];
    for (let index = 0; index < engineRow.length; ) {
      const current = engineRow[index];

      if (Number.isInteger(Number(current))) {
        const nonNumberIndex = engineRow
          .slice(index)
          .findIndex((str) => !Number.isInteger(Number(str)));

        const numberStr = engineRow
          .slice(index, nonNumberIndex > 0 ? nonNumberIndex + index : engineRow.length)
          .join(``);
        const top = engine?.[j - 1];
        const bottom = engine?.[j + 1];
        const range = index + numberStr.length;

        const engineArea = [
          // * top
          ...[
            ...(top?.[index - 1] ?? []),
            ...(top?.slice(index, range) ?? []),
            ...(top?.[range] ?? []),
          ],
          // * sides
          ...[
            ...(engineRow?.[index - 1] ?? []),
            ...engineRow.slice(index, range),
            ...(engineRow?.[range] ?? []),
          ],
          // * bottom
          ...[
            ...(bottom?.[index - 1] ?? []),
            ...(bottom?.slice(index, range) ?? []),
            ...(bottom?.[range] ?? []),
          ],
        ];

        if (engineArea.some((str) => /[^0-9|\.]/g.test(str))) {
          engineParts.push(Number(numberStr));
        }

        index += numberStr.length + 1;
      } else {
        index++;
      }
    }
  }

  return engineParts.reduce((sum, x) => sum + x, 0);
};

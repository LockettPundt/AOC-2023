export const mirageMaintenance = (data: string[]) => {
  const values = data.map((row) => [row.split(` `).map(Number)]).map(getNextExtrapolatedValues);
  return values.reduce((sum, [value]) => sum + value.slice(-1)[0], 0);
};

const getNextExtrapolatedValues = (values: number[][]) => {
  const lastEntry = [...values[values.length - 1]];
  if (lastEntry.every((value) => value === 0)) {
    const reverseValues = [...values].reverse();
    for (let index = 0; index < reverseValues.length; index++) {
      const current = reverseValues[index];
      if (index === 0) {
        current.push(0);
      } else {
        const lastValue = current.slice(-1)[0];
        const previousLastValue = reverseValues[index - 1].slice(-1)[0];
        current.push(lastValue + previousLastValue);
      }
    }
    return reverseValues.reverse();
  }

  const nextValues = lastEntry.slice(1).map((value, index) => value - lastEntry[index]);
  return getNextExtrapolatedValues([...values, nextValues]);
};

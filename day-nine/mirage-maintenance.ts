export const mirageMaintenance = (data: string[], goBackwards: boolean = false) => {
  const values = data
    .map((row) => [row.split(` `).map(Number)])
    .map(getNextExtrapolatedValues(goBackwards));
  return values.reduce((sum, [value]) => sum + (goBackwards ? value[0] : value.slice(-1)[0]), 0);
};

const getNextExtrapolatedValues =
  (goBackwards: boolean = false) =>
  (values: number[][]) => {
    const lastEntry = [...values[values.length - 1]];
    if (lastEntry.every((value) => value === 0)) {
      const reverseValues = [...values].reverse();
      for (let index = 0; index < reverseValues.length; index++) {
        const current = reverseValues[index];
        if (index === 0) {
          goBackwards ? current.unshift(0) : current.push(0);
        } else {
          if (goBackwards) {
            const firstValue = current[0];
            const previousFirstValue = reverseValues[index - 1][0];
            current.unshift(firstValue - previousFirstValue);
          } else {
            const lastValue = current.slice(-1)[0];
            const previousLastValue = reverseValues[index - 1].slice(-1)[0];
            current.push(lastValue + previousLastValue);
          }
        }
      }
      return reverseValues.reverse();
    }

    const nextValues = lastEntry.slice(1).map((value, index) => value - lastEntry[index]);
    return getNextExtrapolatedValues(goBackwards)([...values, nextValues]);
  };

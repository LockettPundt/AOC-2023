export const waitForIt = (data: string[]) => {
  const [times, distances] = data.map((time) =>
    time.split(`:`)[1].split(` `).filter(Boolean).map(Number)
  );
  return times.reduce((product, time, index) => {
    let outcomes = 0;
    for (let i = 0; i < time; i++) {
      const speed = time - i;
      if (speed * i > distances[index]) {
        outcomes++;
      }
    }
    if (outcomes) {
      product *= outcomes;
    }
    return product;
  }, 1);
};

export const scratchCards = (data: string[]): number => {
  const cards = data.map((dataString) =>
    dataString
      .split(`: `)[1]
      .split(` | `)
      .map((card) => card.split(` `).filter(Boolean))
  );
  return cards.reduce((sum, [winningNumbers, myNumbers]) => {
    return (
      sum +
      winningNumbers.reduce((score, winningNumber) => {
        if (myNumbers.includes(winningNumber)) {
          if (!score) {
            score = 1;
          } else {
            score *= 2;
          }
        }
        return score;
      }, 0)
    );
  }, 0);
};

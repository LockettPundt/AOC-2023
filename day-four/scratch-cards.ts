export const scratchCards = (
  data: string[]
): { totalScore: number; totalCards: number } => {
  const cards = data.map((dataString) =>
    dataString
      .split(`: `)[1]
      .split(` | `)
      .map((card) => card.split(` `).filter(Boolean))
  );
  const extraCards = new Map();
  cards.forEach((_, gameIndex) => {
    extraCards.set(gameIndex, 1);
  });
  const totalScore = cards.reduce(
    (sum, [winningNumbers, myNumbers], gameIndex) => {
      const { score, wins } = winningNumbers.reduce(
        (totals, winningNumber) => {
          if (myNumbers.includes(winningNumber)) {
            totals.wins += 1;
            if (!totals.score) {
              totals.score = 1;
            } else {
              totals.score *= 2;
            }
          }
          return totals;
        },
        { score: 0, wins: 0 }
      );
      if (wins > 0) {
        for (let i = 1; i <= wins; i++) {
          extraCards.set(
            gameIndex + i,
            extraCards.get(gameIndex + i) + extraCards.get(gameIndex)
          );
        }
      }
      return sum + score;
    },
    0
  );

  let totalCards = 0;

  for (const [, value] of extraCards) {
    totalCards += value;
  }

  return {
    totalScore,
    totalCards,
  };
};

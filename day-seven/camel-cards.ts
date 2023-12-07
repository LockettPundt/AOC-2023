enum FaceCardValues {
  A = 14,
  K = 13,
  Q = 12,
  J = 11,
  T = 10,
}

export const camelCards = (data: string[]) => {
  const result = data
    .map((str) => str.split(` `))
    .sort(([handA], [handB]) => {
      const handAStrength = getHandStrength(handA);
      const handBStrength = getHandStrength(handB);

      if (handAStrength > handBStrength) {
        return 1;
      } else if (handBStrength > handAStrength) {
        return -1;
      }

      for (let i = 0; i < handA.length; i++) {
        const cardA = Number.isInteger(Number(handA[i]))
          ? Number(handA[i])
          : FaceCardValues[handA[i]];
        const cardB = Number.isInteger(Number(handB[i]))
          ? Number(handB[i])
          : FaceCardValues[handB[i]];

        if (cardA === cardB) {
          continue;
        }
        if (cardA > cardB) {
          return 1;
        }

        return -1;
      }
      return -1;
    });

  return result.reduce(
    (sum, [, bid], index) => sum + Number(bid) * (index + 1),
    0
  );
};

const getHandStrength = (hand: string) => {
  const pairs = Object.entries(
    hand.split(``).reduce((obj: Record<string, number>, card) => {
      if (obj[card]) {
        obj[card] = obj[card] + 1;
      } else {
        obj[card] = 1;
      }
      return obj;
    }, {})
  )
    .map(([card, amount]) => card.repeat(amount))
    .filter((str) => str.length > 1);

  const highestPair =
    pairs.sort((a, b) => b.length - a.length)?.[0]?.length ?? 0;

  if (highestPair === 5) {
    return 6;
  }

  if (highestPair === 4) {
    return 5;
  }

  if (highestPair === 3) {
    if (pairs.length === 2) {
      return 4;
    } else {
      return 3;
    }
  }

  if (pairs.length) {
    if (pairs.length === 2) {
      return 2;
    } else {
      return 1;
    }
  }

  return 0;
};

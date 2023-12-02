const formatData = (data: string[]) =>
  data.map((dataString) => {
    const [, ...sets] = dataString.split(`: `);
    return sets.flatMap((str) =>
      str.split(`; `).flatMap((set) =>
        set.split(`, `).map((current) => {
          const [number, color] = current.split(` `);
          return {
            [color]: number,
          };
        })
      )
    );
  });

export const snowIsland = (
  data: string[],
  config: { red: number; green: number; blue: number }
): { idSum: number; powerSum: number } =>
  formatData(data).reduce(
    (obj, game, index): { idSum: number; powerSum: number } => {
      const gameConfig = { ...config };
      const possibleGame = game.every((set) => {
        const [color, amount] = Object.entries(set)[0];
        return gameConfig[color] >= Number(amount);
      });
      if (possibleGame) {
        obj.idSum += index + 1;
      }
      const highestPossibleColors = game.reduce(
        (colors, set) => {
          const [color, amount] = Object.entries(set)[0];
          const amountNumber = Number(amount);
          if (amountNumber > colors[color]) {
            colors[color] = amountNumber;
          }
          return colors;
        },
        { red: 0, green: 0, blue: 0 }
      );

      obj.powerSum =
        obj.powerSum +
        Object.values(highestPossibleColors).reduce((acc, amount) => {
          return acc * amount;
        }, 1);
      return obj;
    },
    {
      idSum: 0,
      powerSum: 0,
    }
  );

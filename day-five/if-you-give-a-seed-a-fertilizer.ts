export const islandIslandAlmanac = (data: string[]): number => {
  const [seedData, ...mapData] = data;
  const seeds = seedData.split(`: `)[1].split(` `);
  const { maps } = mapData.reduce(
    (obj: { maps: { ranges: string[][] }[] }, dataString) => {
      const map = {
        ranges: dataString
          .split(/\n/)
          .slice(1)
          .map((str) => str.split(` `)),
      };
      obj.maps.push(map);
      return obj;
    },
    {
      maps: [],
    }
  );

  const results = seeds.reduce((arr: number[], seed) => {
    const seedNumber = Number(seed);
    const location = maps.reduce((prev, { ranges }) => {
      const rangeFound = ranges.find(([, source, range]) => {
        const [sourceNum, rangeNum] = [Number(source), Number(range)];
        return sourceNum <= prev && prev <= sourceNum + rangeNum;
      });

      if (rangeFound) {
        const [dest, source] = rangeFound;
        const [destNum, sourceNum] = [Number(dest), Number(source)];
        const next = prev - sourceNum + destNum;
        return next;
      } else {
        return prev;
      }
    }, seedNumber);

    arr.push(location);

    return arr;
  }, []);
  return results.sort((a, b) => a - b)[0];
};

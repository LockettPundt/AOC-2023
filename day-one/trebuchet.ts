const wordToNumberStringValues = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
};

export const trubuchet = (data: string[]): number =>
  data.reduce((acc, dataString) => {
    const numberStrings: string[] = [];
    for (let i = 0; i < dataString.length; i++) {
      const current = dataString[i];
      if (Number.isInteger(Number(current))) {
        numberStrings.push(current);
      } else {
        const match = Object.keys(wordToNumberStringValues).find((key) => {
          const subStr = dataString.slice(i, i + key.length);
          return subStr === key;
        });
        if (match) {
          numberStrings.push(wordToNumberStringValues[match]);
        }
      }
    }
    return acc + Number(numberStrings[0] + numberStrings[numberStrings.length - 1]);
  }, 0);

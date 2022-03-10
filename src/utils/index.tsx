// вернет раномное целое число
const randomInteger = (min:number, max:number):number => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);

  return Math.round(rand);
};

export { randomInteger };

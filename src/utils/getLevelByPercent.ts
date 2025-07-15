const getLevelByPercent = (success: number, all: number) => {
  if (all < 5) return 1;

  const percent = Math.round((success / all) * 100);

  if (percent === 100) return 9;
  if (percent >= 95) return 8;
  if (percent >= 85) return 7;
  if (percent >= 70) return 6;
  if (percent >= 55) return 5;
  if (percent >= 40) return 4;
  if (percent >= 25) return 3;
  if (percent >= 10) return 2;
  return 1;
};

export default getLevelByPercent;

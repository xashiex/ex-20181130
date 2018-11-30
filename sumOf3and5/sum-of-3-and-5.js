function sumOf3and5(target) {
  const t = target - 1;
  const n3 = Math.floor(t / 3);
  const n5 = Math.floor(t / 5);
  const n15 = Math.floor(t / 15);

  function sumX(mul, n) {
    return mul * 0.5 * n * (n + 1);
  }

  return sumX(3, n3) + sumX(5, n5) - sumX(15, n15);
}
console.log(sumOf3and5(1000));

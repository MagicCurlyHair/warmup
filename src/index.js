module.exports = function warmup(temperature) {
  let fahrenheit = Math.round(1.8 * temperature + 32);
  return fahrenheit;
};

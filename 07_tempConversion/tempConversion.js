const ftoc = function(fahrenheit) {
  let celsius = fahrenheit-32;
  celsius = celsius * 5 / 9;
  celsius = Math.round(celsius * 10) /10;
  return celsius;
};

const ctof = function(celsius) {
  let fahrenheit = celsius * 1.8 + 32;
  fahrenheit = Math.round(fahrenheit * 10)/10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

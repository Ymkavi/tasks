function isConvertible(from, to) {
  if (!haveSameSign(from, to)) {
    return false;
  }

  from = Math.abs(from);
  to = Math.abs(to);

  while (to > from) {
    if (to % 2 === 0) {
      to /= 2;
    } else if (to % 10 === 1) {
      to = getNumberWithoutLastDigit(to);
    } else {
      return false;
    }
  }

  return to === from;
}

module.exports = isConvertible;

function haveSameSign(num1, num2) {
  return Math.sign(num1) === Math.sign(num2);
}

function getNumberWithoutLastDigit(number) {
  return Math.floor(Math.abs(number) / 10) * Math.sign(number);
}

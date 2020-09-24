function fizzy(num) {
  if (num % 3 === 0 && num % 5 !== 0) {
    return "Fizz";
  } else if (num % 5 === 0 && num % 3 !== 0) {
    return "Buzz";
  } else if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else { // (num % 3 !== 0 && num % 5 !== 0)
    return num;
  }
}

module.exports = {
  fizzy,
}
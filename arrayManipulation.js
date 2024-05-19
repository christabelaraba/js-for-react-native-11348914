function processArray(numbers) {
    return numbers.map(number => {
      if (number % 2 === 0) {
        return number * number;
      } else {
        return number * 3;
      }
    });
  }
  function formatArrayStrings(strings, numbers) {
    return strings.map((string, index) => {
      if (numbers[index] % 2 === 0) {
        return string.toUpperCase(); 
      } else {
        return string.toLowerCase(); 
      }
    });
  }
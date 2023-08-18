function numberCounter(number) {
  let array = [];
  if (number.toString().includes(1)) {
    return "beep!"
  } else {
    return number;
  }
  array.push(number);
  return array;
}

//  array.push(number.toString());
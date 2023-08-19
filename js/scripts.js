function numberToWord(number) {
  let userEntry = number.toString();
  
  let numberCount = userEntry;
  const numberArray = [];

  numberArray.forEach(function (number) {
    if (userEntry.includes(3)) {
      return "Won't you be my neighbor?";
    } else if (userEntry.includes(2)) {
      return ("Boop!");
    } else if (userEntry.includes(1)) {
      return "Beep!";
    } else {
      return parseInt(number);
    }
  });
    return numberArray;
}

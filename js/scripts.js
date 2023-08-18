function numberCounter(number) {
  let array = [];
  let userEntry = number.toString();
  if (userEntry.includes(2)) {
    array.push("Boop!");
  } else if (userEntry.includes(1)) {
    array.push("Beep!");
  } else {
        array.push(userEntry);
   }
  return array;
}

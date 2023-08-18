function numberCounter(number) {
  let array = [];
  let userEntry = number.toString();
  if (userEntry.includes(3)) {
    array.push("Won't you be my neighbor?");
  } else if (userEntry.includes(2)) {
    array.push("Boop!");
  } else if (userEntry.includes(1)) {
    array.push("Beep!")
  }
  else {
        array.push(userEntry);
   }
  return array;
}

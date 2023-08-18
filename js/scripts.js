function numberToWord(number) {
  const array = [];
  let userEntry = number.toString();
  for (let index = 0; index <= userEntry; index += 1) {
    if (userEntry.includes(3)) {
      return ("Won't you be my neighbor?");
   } else if (userEntry.includes(2)) {
    array.push("Boop!");
} else if (userEntry.includes(1)) {
      return ("Beep!");
    } else {
      return (userEntry);
    }
  }
  array.push();
}

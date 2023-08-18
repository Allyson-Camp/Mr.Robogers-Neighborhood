function numberToWord(number) {
  const array = [];
  let userEntry = number.toString();
  for (let index = 0; index <= userEntry; index += 1) {
    if (userEntry.includes(3)) {
      array.push("Won't you be my neighbor?");
    }
    return array;
  }
}

// for (let index = 0; index <= userEntry; index += 1) {}

// if (userEntry.includes(3)) {
//     array.push("Won't you be my neighbor?");
// } else if (userEntry.includes(2)) {
//     array.push("Boop!");
// } else if (userEntry.includes(1)) {
//     array.push("Beep!");
// } else {
//     array.push(userEntry);
// }
// return array
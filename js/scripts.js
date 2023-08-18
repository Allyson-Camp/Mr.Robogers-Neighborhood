function numberCounter(number) {
  let array = [];
   if (number.toString().includes(1)) {
        array.push("Beep!");
   } else {
        array.push(number);
   }
  return array;
}



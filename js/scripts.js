function numberToWord(number) {
    let userEntry = number.toString();
    const array = [];
    if (userEntry.includes(3)) {
        return "Won't you be my neighbor?";
    } else if (userEntry.includes(2)) {
        array.push("Boop!");
    } else if (userEntry.includes(1)) {
        return "Beep!";
    } else {
        return parseInt(userEntry);
    }
}

 //  for (let index = 0; index <= userEntry; index += 1);

// function numTransform(num) {
//   let userNum = num.toString();
//   let array = [];
//   array.push(userNum);
//   return array;
//  }
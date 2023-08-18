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
        return userEntry[index];
    }
}

 //  for (let index = 0; index <= userEntry; index += 1);
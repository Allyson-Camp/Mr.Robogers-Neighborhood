function numberToWord(number) {
  const array = [];
  let userEntry = number.toString();
        if (userEntry.includes(3)) {
            array.push("Won't you be my neighbor?");
        } else if (userEntry.includes(2)) {
            array.push("Boop!");
        } else if (userEntry.includes(1)) {
            array.push("Beep!");
        } else {
            array.push(userEntry);
        }
        return array;
    }





// for (let index = 0; index < array.length; index += 1)
// for (let i = 0; i < array.length; i += userEntry) 

// const newArray = array.map(function (element)
// {
//   return newArray;
// })

// array.forEach(function (number) {
  
// })


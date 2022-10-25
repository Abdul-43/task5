const arr=[1, 2, 3, 4, 5, 6, 7, 8, 9];

let numArray = arr.filter(function (number){
  for (var i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);
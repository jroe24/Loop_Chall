//Print Odds 1-20
var oddNumber = 1;
for (var i = 0; i < 10; i++) {
    console.log(oddNumber);
    oddNumber += 2;
}

//Print The Sequence
var randomNumber = 4
for (var i = 0; i < 6; i++) {
    console.log(randomNumber);
    randomNumber -= 1.5 
}

//Sigma
var number = 100;
let sum = 0, i = 1;
while(i <= number) {
    sum += i;
    i++
}
console.log(sum);

//Factorial
var number = 1e8;
let sum = 1, n = 1;
while(sum <= number) {
    sum *= n;
    n++
}
console.log(sum)
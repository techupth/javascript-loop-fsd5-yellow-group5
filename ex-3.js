// Exercise #3: Find a Minimum Number
let numbers = [100, 20, 3, 1000];
let minNumber = 0;
// Start coding here
for (let i = 0; i < numbers.length; i++) {
    //console.log(numbers[i])
    if (numbers[i]<minNumber||i === 0){
    minNumber = numbers[i]
}
}

console.log(minNumber);
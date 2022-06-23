//Map Method - creates a new array as well
let names = ["Sam", "Tom", "Eric", "Sally", "Nicholas"]
let lengths = names.map(function(element) {
    return element.length;
})
console.log(lengths);

//Reduce Method - good at taking all the values in an array and reducing it down to 1 value.
let sum = lengths.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});

console.log(sum);

//For Each Method - doesn't return a new array, but good for needing to perform an action in an array &
//If we don't care about storing the resulting value
names.forEach(function(element) {
    console.log(element);
});

let evens = names.filter(function(element) {
    return element.length % 2 == 0;
});
console.log(evens);

let removedElement = names.splice(1,1);
console.log(removedElement);
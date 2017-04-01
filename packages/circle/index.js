var _ = require('underscore');

var numbers = [1,2,3,4,5];

var newNumbers = numbers.reduce(function(memo, number) {
    if (number > 3) {
        memo.push(number);
    }
    return memo;
}, []);

console.log(newNumbers);

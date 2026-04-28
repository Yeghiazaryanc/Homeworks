
const digits=[1,2,3];
const extraNumbers={
    0:8,
    1:9,
    length :2,
    [Symbol.isConcatSpreadable]:true,
};
console.log(digits.concat(extraNumbers));//[ 1, 2, 3, 8, 9 ]

const bonus=[4,5];
bonus[Symbol.isConcatSpreadable]=false;

console.log(digits.concat(bonus));//[ 1, 2, 3, [ 4, 5, Symbol(Symbol.isConcatSpreadable): false ] ]


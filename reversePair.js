//Реализуйте функцию reversePair, которая принимает на вход пару и возвращает другую, в которой значения переставлены местами:
//
//import { cons, car, cdr, toString } from 'hexlet-pairs';
//
//const pair = cons('one', 'two');
//console.log(toString(reversePair(pair))); // ('two', 'one')



import { cons, car, cdr, toString } from 'hexlet-pairs'; // eslint-disable-line

// BEGIN (write your solution here)
const reversePair = (pair) => cons(cdr(pair), car(pair));
// END
export default reversePair;

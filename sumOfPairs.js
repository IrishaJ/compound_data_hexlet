//Реализуйте функцию sumOfPairs, которая принимает на вход две пары и возвращает новую пару, в элементах которой находятся суммы элементов из исходных пар:
//
//import { cons, car, cdr, toString } from 'hexlet-pairs';
//
//const pair1 = cons(4, 10);
//const pair2 = cons(100, 0);
//console.log(toString(sumOfPairs(pair1, pair2))); // (104, 10)

import { cons, car, cdr, toString } from 'hexlet-pairs'; // eslint-disable-line

// BEGIN (write your solution here)
const sumOfPairs = (pair1, pair2) => cons(car(pair1)+car(pair2),cdr(pair1)+cdr(pair2));
// END
export default sumOfPairs;

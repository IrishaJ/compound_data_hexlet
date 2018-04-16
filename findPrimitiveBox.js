//Однажды вы сидели дома, когда курьер Василий принес вам коробку. С коробкой шла записка следующего содержания:
//
//    Коробка состоит из двух отсеков, в одном из которых письмо, а в другом лежит еще одна коробка, в которой также два отсека и точно также один отсек с письмом, а в другом - коробка. Коробки могут быть вложены друг в друга сколько угодно раз. Вам нужно добраться до коробки, внутри которой нет вложенной коробки ни в одном из двух отсеков, и отдать ее курьеру.
//
//Подчеркну, что во всех коробках, кроме той последней, в одном отсеке письмо (любые данные, которые не являются парой), а в другом - всегда коробка, но никогда не две коробки одновременно. Сами отсеки при этом могут меняться, то есть в одной коробке отсеком с письмом может быть первый, а в другой - последний.
//
//Реализуйте рекурсивную функцию findPrimitiveBox, которая принимает на вход "коробку" (пару), находит внутри нее пару без вложенных пар (как описано выше) и возвращает наружу.
//
//import { cons, car, cdr, toString } from 'hexlet-pairs';
//
//const pair = cons(
//  null,
//  cons('one', 'two'),
//);
//toString(findPrimitiveBox(pair)); // ('one', 'two')
//
//const pair2 = cons(
//  cons(null, cons(1, 5)),
//  null,
//);
//toString(findPrimitiveBox(pair2)); // (1, 5)
//
//Функция isPair из библиотеки hexlet-pairs проверяет, является ли переданный ей параметр парой. 

import { car, cdr, isPair, toString } from 'hexlet-pairs'; // eslint-disable-line

// BEGIN (write your solution here)
const findPrimitiveBox = (pair) => {
  if ((!isPair(car(pair))) && (!isPair(cdr(pair)))){
    return (pair);
  } else if (isPair(car(pair))){
    return findPrimitiveBox(car(pair));
    } else return findPrimitiveBox(cdr(pair));  
}
// END

export default findPrimitiveBox;
